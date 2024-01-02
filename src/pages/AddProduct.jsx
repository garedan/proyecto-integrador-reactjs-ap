import { useState } from "react";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  const addProduct = async () => {
    clearErrors();
    let response = await fetch(
      //"https://rest-api-deploy-dev-szgb.4.us-1.fl0.io/products",
      "https://api-productos-dcb0.onrender.com/products",
      //"http://localhost:1234/products",
      {
        method: "POST",
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
    navigate("/");
  };

  const addData = () => {
    document.getElementById("title").value =
      "Lock and Love - Chaqueta motera de piel sintética con capucha extraíble para mujer";
    document.getElementById("price").value = 30;
    document.getElementById("description").value =
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON";
    document.getElementById("category").value = "ropa de mujer";
    document.getElementById("image").value =
      "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg";
    document.getElementById("rate").value = 3;
    document.getElementById("count").value = 340;
  };

  const cleanData = () => {
    document.getElementById("title").value = "";
    document.getElementById("price").value = null;
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("image").value = "";
    document.getElementById("rate").value = null;
    document.getElementById("count").value = null;
  };

  return (
    <div className="mt-[120px]">
      {/* <Hero /> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Agregar un nuevo producto
          </h2>
          <form onSubmit={handleSubmit(addProduct)}>
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
                  {...register("title", { required: true })}
                  defaultValue="Remera para hombre entallada"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Remera para hombre entallada casual premium "
                />
                {errors.title?.type === "required" && (
                  <span> Este campo es obligatorio</span>
                )}
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
                  {...register("price", { required: true })}
                  defaultValue="16"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$299"
                />
                {errors.price?.type === "required" && (
                  <span> Este campo es obligatorio</span>
                )}
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
                  {...register("image", { required: true })}
                  defaultValue="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                />
                {errors.image?.type === "required" && (
                  <span> Este campo es obligatorio</span>
                )}
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
                  {...register("category", { required: true })}
                  defaultValue="ropa de mujer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue="">Seleccione categoria</option>
                  <option value="ropa de hombre">Ropa de hombre</option>
                  <option value="ropa de mujer">Ropa de mujer</option>
                </select>
                {errors.category?.type === "required" && (
                  <span> Este campo es obligatorio</span>
                )}
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
                  {...register("rate", { required: true })}
                  defaultValue="3"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="4"
                />
                {errors.rate?.type === "required" && (
                  <span> Este campo es obligatorio</span>
                )}
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
                  {...register("count", { required: true })}
                  defaultValue="430"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="120"
                />
                {errors.count?.type === "required" && (
                  <span> Este campo es obligatorio</span>
                )}
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
                  {...register("description", { required: true })}
                  defaultValue="El color podría ser ligeramente diferente entre en la pantalla y en la práctica. / Tenga en cuenta que la constitución física varía de una persona a otra, por lo que debe consultar la información detallada sobre tallas en la descripción del producto."
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Remera para hombre entallada"
                ></textarea>
                {errors.description?.type === "required" && (
                  <span> Este campo es obligatorio</span>
                )}
              </div>
            </div>

            <button
              // onClick={addProduct}
              id="submit-button"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Agregar producto
            </button>
            <button
              type="button"
              onClick={addData}
              id="add-button"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-3"
            >
              Agregar datos
            </button>
            <button
              type="button"
              onClick={cleanData}
              id="add-button"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-3"
            >
              Limpiar datos
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
