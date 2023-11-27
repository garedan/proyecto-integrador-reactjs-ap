import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price, rating } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <Link to={`/product/${id}`}>
              <img
                className="max-h[160px] group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </Link>
          </div>
        </div>
        {}
        <div className="absolute -bottom-1 -right-1 p-2 flex flex-col justify-center items-center gap-y-2 group-hover:opacity-100 transition-all duration-300 opacity-0">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center w-4 h-4 cursor-pointer">
              <BsBag className="text-3xl text-red-500 bg-white" />
            </div>
          </button>
        </div>
      </div>
      {}
      <div>
        <div className="test-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <h2 className="font-semibold">$ {price}</h2>
        <h2 className="test-sm text-gray-600">
          {rating.rate} ({rating.count} opiniones)
        </h2>
      </div>
    </div>
  );
};

export default Product;
