import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function TBar() {
  return (
    <div className=" h-10 justify-center sm:justify-between items-center flex shadow-xl w-full text-[#bcbcbc] border-gray-50 bg-[#0e0e0e] gap-2 py-2 pr-3">
      <div className="flex items-center">
        <a href="https://www.instagram.com/dtopaz.ae/">
          <FaInstagram className="  text-3xl  bg-[#0e0e0e] p-2 hover:bg-[#ab8e69]  rounded-sm" />
        </a>
        <a href="https://wa.me/+917592838850/?text=its me abhilash">
          <FaWhatsapp className="  text-3xl bg-[#0e0e0e]  p-2 hover:bg-[#ab8e69]  rounded-sm" />
        </a>
        <FaSquareXTwitter className="  text-3xl bg-[#0e0e0e]  p-2 hover:bg-[#ab8e69]  rounded-sm" />
        <FaYoutube className=" text-3xl  bg-[#0e0e0e] p-2 hover:bg-[#ab8e69]  rounded-sm" />
      </div>
      <div className="sm:flex hidden justify-center gap-2">
        <div className="flex items-center">
          <FaPhoneAlt className="text-3xl p-2 bg-[#0e0e0e]" />
          <h1 className=" text-sm">+971-0000000</h1>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-3xl p-2 bg-[#0e0e0e]" />
          <h1 className=" text-sm">info@dtopazjewellery.com</h1>
        </div>
      </div>
    </div>
  );
}

export default TBar;
