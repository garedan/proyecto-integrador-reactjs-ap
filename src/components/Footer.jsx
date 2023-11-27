import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="text-white flex gap-2 text-2xl">
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
        <p className="text-white text-center">
          Copyright &copy; TIENDA TUYA 2023.
        </p>
        <div className="text-white flex flex-col gap-2 text-2xl">
          <Link to="/AddProduct" className="text-white flex">
            <button className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-blue-500 rounded-lg w-[200px]">
              Agregar Producto
            </button>
          </Link>
          <Link to="/ListProducts" className="text-white flex">
            <button className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-blue-500 rounded-lg w-[200px]">
              Ver Productos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
