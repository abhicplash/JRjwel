import React from "react";
import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { jweldata } from "../../utils/data/JwellData";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";

function SingleJewel() {
  const dispath = useDispatch();
  const { id } = useParams();
  function HandleAdd(items) {
    dispath(addItem(items));
  }

  return (
    <Layout>
      <div className="w-full flex justify-center items-center bg-[#b0b6b9]  py-14 px-16 ">
        {console.log(jweldata)}
        {jweldata
          .filter((item) => item.id === parseInt(id))
          .map((list) => (
            <div className="h-[75vh] w-[55%] text-yellow-50 bg-[#f7f7f7]   shadow-2xl  ">
              <div
                key={list.id}
                className=" h-full flex  relative  justify-center w-full "
              >
                <div className=" flex flex-col justify-center items-center w-[35%]">
                  <img src={list.image} alt="" className="px-14" />
                  <h1 className="text-xl font-black text-slate-700">
                    {list.name}
                  </h1>
                </div>
                <div className=" p-6  h-full w-[65%]    relative flex flex-col bg-gradient-to-bl from-gray-700 to-black   gap-1">
                  <h1 className="text-2xl">{list.name}</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export default SingleJewel;
