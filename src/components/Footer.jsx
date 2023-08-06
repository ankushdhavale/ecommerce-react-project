import React from 'react'
import { AiTwotoneHeart } from "react-icons/ai"
import { AiOutlineCopyrightCircle } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="border border-y-gray-700 shadow-lg w-full mt-20 mb-6 py-4 ">
      <div className="flex items-center gap-1 text-center justify-center">
        Created By <AiTwotoneHeart  fontSize={20} className="text-red-500 "/>
        <a href="https://www.linkedin.com/in/ankush-dhavale-5aa76b213/" className="text-black-100 font-bold hover:text-red-500">Ankush Dhavale</a>
        <span><AiOutlineCopyrightCircle className="text-black-700"/></span> 2023
      </div>
    </div>
  )
}

export default Footer;
