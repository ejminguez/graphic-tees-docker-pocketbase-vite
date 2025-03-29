import { pb } from "@/pocketbaseClient/pocketbaseClient";
import { Products } from "@/data.types";

const fetchProduct = async (id: string): Promise<Products> => {
    const record = await pb.collection('product').getOne(id);
    return record as unknown as Products;
}

export default fetchProduct;