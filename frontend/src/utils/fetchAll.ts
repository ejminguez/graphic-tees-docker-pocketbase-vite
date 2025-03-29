import { pb } from "@/pocketbaseClient/pocketbaseClient";

interface Products {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    created: Date;
    updated: Date;
}

const fetchAll = async () => {
    const records = await pb.collection('product').getFullList({});
    return records as unknown as Products[];
}

export default fetchAll;