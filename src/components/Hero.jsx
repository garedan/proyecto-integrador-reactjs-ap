import React from "react";
import WomanImg from "../img/woman4.png";
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const Hero = () => {
  return (
    <div className="h-[572px] bg-hero bg-no-repeat bg-cover bg-center ">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-white mr-3"></div> Tendencia
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            REBAJAS DE OTOÑO
            <br />
            <span className="font-semibold">MUJERES</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Más información
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
