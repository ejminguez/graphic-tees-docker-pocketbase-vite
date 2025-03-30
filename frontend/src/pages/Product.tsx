import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Products } from "@/data.types";
import fetchProduct from "@/utils/fetchSingleProduct";
import { pb } from "@/pocketbaseClient/pocketbaseClient";
import ShirtViewer from "@/components/ShirtViewer";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Products | null>(null);



  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const data = await fetchProduct(id as string);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchSingleProduct();
    }
  }, [id]);

  const getModelUrl = (productID: string, fileName: string) => {
    return `${pb.baseURL}/api/files/pbc_1108966215/${productID}/${fileName}`;
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }

  console.log(product);

  return (
    <section className="w-full">
      <div className="xl:w-[70%] mx-auto xl:p-8">
        {/* PRODUCT CARD */}
        <div className="xl:p-8 grid gap-4">
          <div className="xl:w-[20%] mx-auto">
            <div className="text-center">
              <h2>{product.name}</h2>
              <p className="text-gray-400">{product.description}</p>
              {product.price == 0 ? (
                <p className="font-bold">NOT FOR SALE</p>
              ) : (
                <p className="font-bold">${product.price}</p>
              )}
              <p>{product.category}</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg">
            <ShirtViewer modelUrl={getModelUrl(product.id, product.model)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
