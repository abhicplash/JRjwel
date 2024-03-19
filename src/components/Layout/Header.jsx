import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector } from "react-redux";

function Header() {
  const [view, setView] = useState(false);
  const cartItems = useSelector((store) => store.ttb.items);

  return (
    <div className="flex sm:justify-between  justify-around items-center uppercase w-full h-28 px-3 text-[#e5e5e5] bg-[#121212] ">
      <div className="flex items-center flex-col gap-0 font-mono  font-semibold">
        <h1
          className="text-4xl cursor-pointer "
          onClick={() => {
            setView(!view);
          }}
        >
          dtopaz
        </h1>
        <h1 className="text-sm text-[#b7884a] font-bold mt-[-9px] ml-[4px] font-serif">
          jewellery
        </h1>
      </div>
      <ul className="hidden sm:flex relative list-none font-bold   gap-20 font-mono bg-[#121212] items-center">
      <Link to={"/"}>
            <h1 className="hover:text-[#b7884a] cursor-pointer">home</h1>
          </Link>
        <li className="hover:text-[#b7884a]">About</li>
        <li className="hover:text-[#b7884a] cursor-pointer">contact</li>
        <li className="flex items-center cursor-pointer hover:bg-[#ab8e69] bg-[#b7884a] py-1 justify-center text-[#050505] px-5">
          <Link to={"/product"}>Products</Link>
        </li>
      </ul>
      {view ? null : (
        <ul className="sm:hidden absolute list-none font-bold left-0 w-[100vw] top-[9.5rem]   gap-10 font-mono bg-[#121212] flex flex-col justify-center py-5  items-center">
          <Link to={"/"}>
            <h1 className="hover:text-[#b7884a] cursor-pointer">home</h1>
          </Link>
          <li className="hover:text-[#b7884a]">About</li>
          <li className="hover:text-[#b7884a] cursor-pointer">contact</li>
          <li className="flex items-center cursor-pointer hover:bg-[#ab8e69] bg-[#b7884a] py-1 justify-center text-[#050505] px-5">
            Products
          </li>
        </ul>
      )}
      <Link to={"/cart"}>
        <div className="relative ">
          <HiOutlineShoppingBag className="text-[30px]" />
          <h1 className="text-[8px] bg-[#b7884a] py-0.5 px-[7px] absolute top-0 left-0 rounded-full">
            {cartItems.length}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Header;
