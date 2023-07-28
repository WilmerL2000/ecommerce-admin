import prismadb from "@/lib/prismadb";

/**
 * The function `getSalesCount` retrieves the count of paid orders for a specific store.
 * @param {string} storeId - The `storeId` parameter is a string that represents the ID of a store.
 * @returns The function `getSalesCount` returns the count of sales for a specific store.
 */
export const getSalesCount = async (storeId: string) => {
    const salesCount = await prismadb.order.count({
        where: {
            storeId,
            isPaid: true
        },
    });

    return salesCount;
};