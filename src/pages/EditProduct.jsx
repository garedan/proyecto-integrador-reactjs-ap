import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { useLocation } from "react-router-dom";

const EditProduct = (props) => {
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
  }, []);

  const updatePost = async (id) => {
    let response = await fetch(
      //"https://rest-api-deploy-76t2-dev.fl0.io/products",
      `https://rest-api-deploy-dev-szgb.4.us-1.fl0.io/products/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          sql: "SELECT * FROM products",
          title: document.getElementById("title").value,
          price: parseInt(document.getElementById("price").value),
          description: document.getElementById("description").value,
          category: document.getElementById("category").value,
          image: document.getElementById("image").value,
          rating: {
            rate: parseInt(document.getElementById("rate").value),
            count: parseInt(document.getElementById("count").value),
          },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    let data = await response.json();

    handleRedirect();
  };

  const handleRedirect = () => {
    navigate("/ListProducts");
  };
  //console.log("products: ", products);
  const location = useLocation();
  const { from } = location.state;

  const filteredProduct = products.filter((item) => item.id === from);

  //console.log("newColors: ", filteredProduct);
  return (
    <div className="mt-[120px]">
      {/* <Hero /> */}
      {filteredProduct.map((product) => {
        return (
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Editar producto
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={product.title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Remera para hombre entallada casual premium "
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Precio
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={product.price}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$299"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Imagen
                  </label>
                  <input
                    type="url"
                    name="image"
                    id="image"
                    defaultValue={product.image}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Categoria
                  </label>
                  <select
                    id="category"
                    name="category"
                    defaultValue={product.category}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option defaultValue="">Seleccione categoria</option>
                    <option value="ropa de hombre">Ropa de hombre</option>
                    <option value="ropa de mujer">Ropa de mujer</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="calificacion"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Calificación
                  </label>
                  <input
                    type="number"
                    name="rate"
                    id="rate"
                    defaultValue={product.rating.rate}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="4"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="count"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Cantidad de votos
                  </label>
                  <input
                    type="number"
                    name="count"
                    id="count"
                    defaultValue={product.rating.count}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="120"
                    required=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="8"
                    defaultValue={product.description}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Remera para hombre entallada"
                  ></textarea>
                </div>
              </div>
              <button
                onClick={() => updatePost(product.id)}
                id="submit-button"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Editar producto
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default EditProduct;
