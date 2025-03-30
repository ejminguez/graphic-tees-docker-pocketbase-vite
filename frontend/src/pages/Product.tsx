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

  const getImageUrl = (productID: string, fileName: string) => {
    return `${pb.baseURL}/api/files/pbc_1108966215/${productID}/${fileName}`;
  };

  const getModelUrl = (productID: string, fileName: string) => {
    return `${pb.baseURL}/api/files/pbc_1108966215/${productID}/${fileName}`;
  }

  if (!product) {
    return <h1>Loading...</h1>;
  }

  console.log(product);

  return (
    <section className="grid items-center gap-8 min-h-screen w-full">

      <div className="bg-red-300 h-screen w-[60%] mx-auto relative top-10">
        <ShirtViewer modelUrl={getModelUrl(product.id, product.model)} />
      </div>

      <div key={product.id} className="p-4 bg-white shadow-lg xl:w-1/4 mx-auto">
        {/* PRODUCT CARD */}
        <div>
          <div className="overflow-clip">
            <img
              src={getImageUrl(product.id, product.image)}
              alt={product.name}
              className="hover:scale-[105%] transition-all duration-300 cursor-pointer"
            />
          </div>
          <div className="grid">
            <h2>{product.name}</h2>
            <p className="text-gray-400">{product.description}</p>
          </div>

          {product.price == 0 ? (
            <p className="font-bold">NOT FOR SALE</p>
          ) : (
            <p className="font-bold">${product.price}</p>
          )}

          <p>{product.category}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
