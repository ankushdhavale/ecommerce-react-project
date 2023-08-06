import { useState , useEffect } from 'react';
// import { useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux";

const Cart = () => {


  const {cart} = useSelector((state)=>state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=> acc + curr.price,0));
  },[cart])

  return (
    <div className="flex items-center justify-center text-center">
        {
          cart.length > 0 ? 
          (<div className="flex gap-16 p-10 max-w-6xl mx-auto flex-wrap lg:flex-nowrap  ">
            
            <div className="lg:w-[70%]">
                  {
                    cart.map((item,index) =>{
                      return <CartItem key={item.id} item={item} itemIndex={index}/>
                    } )
                  }
            </div>

            <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
                <div className="mt-20">
                    <div className="text-xl text-[#166534] uppercase font-[600]">Your Cart</div>
                    <div className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summery</div>
                    <p className="font-[600] text-xl text-slate-700">
                      Total Item: <span className="font-normal" >{cart.length}</span>
                    </p>
                </div>

                <div className="mb-20">
                  <p className="text-slate-700 text-xl font-[600] mb-5 ">Total Amount : <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span></p>
                  <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in"> Checkout Now </button>
                </div>
            </div>

          </div>):
              (<div className="mt-[15%]">
                    <h1 className="mb-2">Cart Empty</h1>
                    <NavLink to = "/">
                      <button className="border rounded-full px-3 py-1 bg-amber-100 hover:bg-[#4CAF50]">Shop Now</button>
                    </NavLink>
              </div>) 
        }
    </div>
  )
}

export default Cart;
