import React from "react";
import { GiFullPizza } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-red-900 outline-none flex">
      <div className="Logo">
        <div className="flex">
          <GiFullPizza className="text-[60px] mt-2 ml-40 text-[#fff]" />
          <h1 className="text-[50px] ml-3 text-[#ffffff] z-40">
            Pizza Palooza
          </h1>
        </div>
      </div>
      <div className="flex relative ml-[50%]">
        <div className="rounded-lg bg-red-950 w-[200px] h-[50px] mt-3 container outline-none">
          <div className="flex mt-2.5 ml-5">
            <button>
              <HiOutlineShoppingCart className="text-[30px] hover:text-[31px] text-[#fff]" />
            </button>
            <h1 className="text-[18px] text-[#fff] ml-4 font-serif mt-0.5 ">
              Your Cart
            </h1>
            <div className="ml-4 mt-0.5 bg-red-400 w-[30px] rounded-lg">
              <h2 className="text-[17px] text-[#fff] font-serif flex justify-center">
                2
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
