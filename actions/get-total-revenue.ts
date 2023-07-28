import prismadb from "@/lib/prismadb";

/**
 * The `getTotalRevenue` function calculates the total revenue for a given store by summing up the
 * prices of all products in paid orders.
 * @param {string} storeId - The `storeId` parameter is a string that represents the ID of a store. It
 * is used to filter the orders and calculate the total revenue for that specific store.
 * @returns The function `getTotalRevenue` returns the total revenue as a number.
 */
export const getTotalRevenue = async (storeId: string) => {
    const paidOrders = await prismadb.order.findMany({
        where: {
            storeId,
            isPaid: true
        },
        include: {
            orderItems: {
                include: {
                    product: true
                }
            }
        }
    });

    /* The code is calculating the total revenue by iterating over the `paidOrders` array and summing up
    the prices of all the products in each order. */
    const totalRevenue = paidOrders.reduce((total, order) => {
        const orderTotal = order.orderItems.reduce((orderSum, item) => {
            return orderSum + item.product.price.toNumber();
        }, 0);
        return total + orderTotal;
    }, 0);

    return totalRevenue;
}