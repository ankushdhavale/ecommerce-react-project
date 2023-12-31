import {FaShoppingCart} from "react-icons/fa"
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux"



const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div className='border border-r-2 shadow-lg  '>
      <nav className="flex justify-center items-center h-20 max-w-6xl mx-auto ">

        <div className="flex items-center font-[20px] text-slate-100 mr-5 space-x-6 gap-x-40">
            <NavLink to = "/" >
              <p className="hover:font-bold font-[100px]">InstaShop</p>
            </NavLink >
          

              <NavLink to ="/cart">
              <div className="ralative hover:font-bold">
                <FaShoppingCart />
                {
                  cart.length > 0 &&
                  <span 
                  className=" absolute top-7 right-[100px]  bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white mx-auto"
                  >{cart.length}</span>
                }
                
                </div>
             </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
