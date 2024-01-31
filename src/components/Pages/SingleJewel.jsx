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
            <div className="w-full flex justify-center items-center bg-gradient-to-tr from-blue-100 to-slate-200  py-36 px-16 ">
                {jweldata.filter(item => item.id === parseInt(id)).map(list =>
                    <div className="h-[80vh] w-[70%] text-yellow-50 bg-gradient-to-tr from-blue-100 to-slate-200 rounded-xl border border-gray-300 shadow-2xl  ">
                        <div key={list.id} className=" h-full flex relative  justify-center w-full ">
                            <div className=" flex flex-col justify-center items-center w-1/2">
                                <img src={list.image} alt="" className="" />
                                <h1 className="text-xl font-black text-slate-700">
                                    {list.name}
                                </h1>
                            </div>
                            <div className=" p-6  h-full w-1/2 rounded-r-xl border border-gray-700 relative flex flex-col bg-gradient-to-bl from-gray-700 to-black   gap-1">
                                <h1 className="text-4xl font-black ">
                                    {list.name}
                                </h1>
                                <h1 className="text-lg font-semibold"> Lorem ipsum dolor sit amet </h1>
                                <h1 className="w-96 text-justify p-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Unde fuga, incidunt enim aperiam quae non
                                    sapiente et officia neque. Ut, placeat quibusdam
                                    modi similique quidem optio nihil veritatis
                                    veniam labore!
                                </h1>
                                <h1 className="text-xl font-bold uppercase">20 Karat</h1>
                                <h1 className="text-xl ">Lorem ipsum dolor sit amet consectetur <br /> cidunt enim  modi similique quidem opuh </h1>
                                <h1 className="text-2xl font-bold">$156</h1>
                                <div className="flex gap-3 mt-5 justify-evenly">
                                    <button
                                        onClick={() => { HandleAdd(list) }}
                                        className="border border-gray-600 hover:border-white rounded-md py-2 px-6 bg-blac bg-gradient-to-bl from-gray-700 to-black hover:bg-white text-gray-300 hover:text-white font-semibold">+CART</button>
                                    <Link to={"/"}>
                                        <button className="border border-gray-600 hover:border-yellow-50 rounded-md py-2 px-6 bg-blac bg-gradient-to-br from-gray-500 to-black hover:bg-white text-gray-300 hover:text-yellow-50 font-semibold">HOME</button>
                                    </Link>
                                    <button className="border border-gray-600 hover:border-white rounded-md py-2 px-6 bg-blac bg-gradient-to-br from-gray-500 to-black hover:bg-white text-gray-300 hover:text-white font-semibold">SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default SingleJewel;
