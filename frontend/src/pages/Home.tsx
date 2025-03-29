import { pb } from "@/pocketbaseClient/pocketbaseClient";
import fetchAll from "@/utils/fetchAll";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";

const Home = () => {
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

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAll();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const getImageUrl = (productID: string, fileName: string) => {
    return `${pb.baseURL}/api/files/pbc_1108966215/${productID}/${fileName}`;
  };

  return (
    <section className="grid gap-8">
      <div className="overflow-clip">
        <Hero />
      </div>

      {/* LATEST PRODUCT SECTION */}
      <div>
        <div className="flex items-center justify-between w-[96%] mx-auto">
          <p className="text-2xl text-center">LATEST</p>
          <Link to={"/shop"}>See more</Link>
        </div>
        <ul className="grid gap-4 p-8 xl:flex">
          {products.map((product) => (
            <li key={product.id} className="p-4 bg-white shadow-lg xl:w-1/4">
              {/* PRODUCT CARD */}
              <div>
                <div className="overflow-clip">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={getImageUrl(product.id, product.image)}
                      alt={product.name}
                      className="hover:scale-[105%] transition-all duration-300 cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="grid">
                  <Link
                    to={`/product/${product.id}`}
                    className="hover:text-blue-800 transition-all duration-300"
                  >
                    <h2>{product.name}</h2>
                  </Link>
                  <p className="text-gray-400">{product.description}</p>
                </div>

                {product.price == 0 ? (
                  <p className="font-bold">NOT FOR SALE</p>
                ) : (
                  <p className="font-bold">${product.price}</p>
                )}

                <p>{product.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
