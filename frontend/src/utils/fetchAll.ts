import { pb } from "@/pocketbaseClient/pocketbaseClient";
import { Products } from "@/data.types"

const fetchAll = async () => {
    const records = await pb.collection('product').getFullList({});
    return records as unknown as Products[];
}

export default fetchAll;