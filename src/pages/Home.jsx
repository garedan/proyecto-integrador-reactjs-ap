import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import Hero from "../components/Hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        //"https://rest-api-deploy-dev-szgb.4.us-1.fl0.io/products",
        "https://api-productos-dcb0.onrender.com/products",
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

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "ropa de hombre" || item.category === "ropa de mujer"
    );
  });
  return (
    <>
      {/* <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section> */}
      <Products filteredProducts={filteredProducts} />
    </>
  );
};

export default Home;
