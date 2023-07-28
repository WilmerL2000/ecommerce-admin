import Stripe from "stripe";
import { NextResponse } from 'next/server';

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// !Option request to make stripe works
/**
 * The function OPTIONS returns a JSON response with CORS headers.
 * @returns An empty JSON object is being returned.
 */
export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    const { productIds } = await req.json();

    if (!productIds || productIds.length === 0) {
        return new NextResponse("Product ids are required", { status: 400 });
    }

    const products = await prismadb.product.findMany({
        where: {
            id: {
                in: productIds
            }
        }
    });

    /* The line `const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];` is declaring a
    variable named `line_items` with a type annotation. The type annotation
    `Stripe.Checkout.SessionCreateParams.LineItem[]` specifies that `line_items` is an array of
    objects that conform to the `LineItem` interface defined in the `SessionCreateParams` interface
    of the `Checkout` module in the `Stripe` library. This variable is initialized as an empty array
    `[]`. */
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    /* The code block you provided is iterating over each product in the `products` array and adding a new
    item to the `line_items` array. */
    products.forEach((product) => {
        line_items.push({
            quantity: 1,
            price_data: {
                currency: 'USD',
                product_data: {
                    name: product.name,
                },
                unit_amount: product.price.toNumber() * 100
            }
        });
    });

    /* The code block you provided is creating a new order in the database using the `prismadb` library. */
    const order = await prismadb.order.create({
        data: {
            storeId: params.storeId,
            isPaid: false,
            orderItems: {
                create: productIds.map((productId: string) => ({
                    product: {
                        connect: {
                            id: productId
                        }
                    }
                }))
            }
        }
    });

    // !Create a stripe session to pay
    /* The code you provided is creating a new Stripe Checkout session. */
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        billing_address_collection: 'required',
        phone_number_collection: {
            enabled: true,
        },
        success_url: `${process.env.FRONTEND_STORE_URL}/cart?success=1`,
        cancel_url: `${process.env.FRONTEND_STORE_URL}/cart?canceled=1`,
        metadata: {
            orderId: order.id
        },
    });

    return NextResponse.json({ url: session.url }, {
        headers: corsHeaders
    });
}