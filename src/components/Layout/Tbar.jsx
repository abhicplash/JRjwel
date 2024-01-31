import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function TBar() {
    return (
        <div className="flex shadow-xl w-full justify-end borde border-gray-50 bg-gradient-to-bl from-gray-700 to-black  items-center gap-2 py-2 pr-3">
            <FaInstagram className=' shadow shadow-gray-600 text-white text-3xl  p-1 hover:border-2 border-white border rounded-full' />
            <FaFacebookSquare className=' shadow shadow-gray-600 text-white text-3xl  p-1 hover:border-2 border-white border rounded-full' />
            <FaSquareXTwitter className=' shadow shadow-gray-600 text-white text-3xl  p-1 hover:border-2 border-white border rounded-full' />
            <FaYoutube className=' shadow shadow-gray-600 text-white text-3xl  p-1 hover:border-2 border-white border rounded-full' />
        </div>
    )
}

export default TBar