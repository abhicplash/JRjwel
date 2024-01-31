import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { addItem } from "../../utils/store/cartSlice";
import { jweldata } from "../../utils/data/JwellData";
// import { MdFavoriteBorder } from "react-icons/md";
// import { FaCartShopping } from "react-icons/fa6";

function Product() {
  const dispach = useDispatch();
  function HandleAdd(items) {
    dispach(addItem(items));
  }
  return (
    <Layout>
      <div className="flex  flex-wrap justify-center gap-20 px-5 py-28  bg-white  ">
        {jweldata.map(
          list =>
            // <div className="h-full border border-black/10 rounded-xl shadow-2xl">
            //   <img
            //     src={list.image}
            //     alt=""
            //     className=" w-56 h-56  px-14  py-10 rounded-t-xl border-b "
            //   />
            //   <div className="w-56 h-14  bg-black rounded-b-xl">
            //     <h1></h1>
            //   </div>
            // </div>
            <div className=" rounded-md cursor-pointer relative   flex flex-col  mt-5 max-lg:w-48 w-60 h-80 max-lg:h-60 hover:border  hover:shadow-2xl shadow-xl  justify-center items-center">
                <div className='absolute right-0 top-2 w-14 h-28 flex flex-col text-black  justify-center gap-1 text-4xl items-center'>
                    <FaRegHeart onClick={HandleAdd} className='border rounded-md cursor-pointer hover:p-1 duration-500 p-2 bg-gray-100 shadow-lg ' />
                    <PiShoppingCartSimpleBold className='border rounded-md cursor-pointer hover:p-1 duration-500 p-2 bg-gray-100 shadow-lg ' />
                    <FaRegEye className='border rounded-md cursor-pointer hover:p-1 duration-500 p-2 bg-gray-100 shadow-lg ' />
                </div>
                <div className='w-48 h-52 relative p-5 hover:p-3  flex justify-center items-center'>
                    <Link to={"/jewel/" + list.id} key={list.id}>
                        <img src={list.image} alt="" className="
                         w-full max-lg:h-48 max-lg:36  h-full p-8  duration-700    " />
                    </Link>
                </div>
                <h1>{list.title}</h1>

            </div>
        )}
      </div>
    </Layout>
  );
}

export default Product;
