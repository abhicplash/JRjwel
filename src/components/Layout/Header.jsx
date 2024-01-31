import React from "react";

import { Link } from "react-router-dom";
import TBar from "./Tbar";

function Header() {
  return (
    <div className="  fixed w-full z-20 bg-gradient-to-r from-blue-100 to-slate-200  ">
      <TBar />
      <div className="px-5  flex w-full h-[8vh]  justify-between font-semibold items-center uppercase ">
        <Link to={"/"}>
          <h1 className="text-4xl">JR</h1>
        </Link>
        <ul className="flex gap-16 ">
          <Link to={"/product"}>
            <li>Product</li>
          </Link>
          <li>about</li>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
