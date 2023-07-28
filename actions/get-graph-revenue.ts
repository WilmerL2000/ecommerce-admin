import prismadb from "@/lib/prismadb";

interface GraphData {
    name: string;
    total: number;
}

/**
 * The `getGraphRevenue` function retrieves paid orders for a specific store, groups them by month, and
 * calculates the total revenue for each month.
 * @param {string} storeId - The `storeId` parameter is a string that represents the ID of a store. It
 * is used to filter the orders and retrieve revenue data specific to that store.
 * @returns The function `getGraphRevenue` returns a Promise that resolves to an array of `GraphData`
 * objects.
 */
export const getGraphRevenue = async (storeId: string): Promise<GraphData[]> => {

    const paidOrders = await prismadb.order.findMany({
        where: {
            storeId,
            isPaid: true,
        },
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            },
        },
    });

    const monthlyRevenue: { [key: number]: number } = {};

    // Grouping the orders by month and summing the revenue
    /* The code block you provided is iterating over each order in the `paidOrders` array. For each order,
    it retrieves the month of creation using `order.createdAt.getMonth()`, where 0 represents January, 1
    represents February, and so on. */
    for (const order of paidOrders) {
        const month = order.createdAt.getMonth(); // 0 for Jan, 1 for Feb, ...
        let revenueForOrder = 0;

        for (const item of order.orderItems) {
            revenueForOrder += item.product.price.toNumber();
        }

        // Adding the revenue for this order to the respective month
        monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
    }

    const graphData: GraphData[] = [
        { name: "Jan", total: 0 },
        { name: "Feb", total: 0 },
        { name: "Mar", total: 0 },
        { name: "Apr", total: 0 },
        { name: "May", total: 0 },
        { name: "Jun", total: 0 },
        { name: "Jul", total: 0 },
        { name: "Aug", total: 0 },
        { name: "Sep", total: 0 },
        { name: "Oct", total: 0 },
        { name: "Nov", total: 0 },
        { name: "Dec", total: 0 },
    ];

    // Filling in the revenue data
    for (const month in monthlyRevenue) {
        graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
    }

    return graphData;
}