import prismadb from "@/lib/prismadb";

/**
 * The function `getStockCount` retrieves the count of non-archived products for a given store ID.
 * @param {string} storeId - The `storeId` parameter is a string that represents the unique identifier
 * of a store. It is used to filter the products based on the store they belong to.
 * @returns The function `getStockCount` returns the count of products in a store that are not
 * archived.
 */
export const getStockCount = async (storeId: string) => {
    const stockCount = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false,
        }
    });

    return stockCount;
};