import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import {
  useNavigate,
  Link,
} from "react-router-dom/dist/umd/react-router-dom.development";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://rest-api-deploy-dev-szgb.4.us-1.fl0.io/products",
        //"http://localhost:1234/products",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, [products]);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "ropa de hombre" || item.category === "ropa de mujer"
    );
  });

  const deletePost = async (id) => {
    await fetch(
      `https://rest-api-deploy-dev-szgb.4.us-1.fl0.io/products/${id}`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      if (response.status === 200) {
      } else {
        return;
      }
    });
  };

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <>
      {/* <Hero /> */}
      <center>
        <ul className="max-w-lg divide-y divide-gray-200 dark:divide-gray-700 border-solid border-2 mt-[200px] mb-[50px]">
          {filteredProducts.map((product) => {
            return (
              <li className="pb-3 sm:pb-4 px-1 py-2" key={product.id}>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={product.image}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {product.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {product.category}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $ {product.price}
                  </div>
                  <button
                    onClick={() => deletePost(product.id)}
                    className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg w-[100px]"
                  >
                    Eliminar
                  </button>
                  <Link to="/EditProduct" state={{ from: product.id }}>
                    <button className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg w-[100px]">
                      Editar
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </center>
    </>
  );
};

export default ListProducts;
