import { IoMdClose } from "react-icons/io";
import CartContext from "../Cart/CartContext";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

   return (
      <div className={`fixed top-10 right-0 w-0-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
         {/* close button */}
         <div className="flex justify-end p-4">
            <button onClick={toggleCartDrawer}>
               <IoMdClose className='h-6 w-6 text-gray-700 transition-all duration-300 hover:text-fablyr-red  hover:scale-140' />
            </button>
         </div>
         {/* cart content goes here */}
         <div className="grow p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

            {/* cart content component */}
            <CartContext />
         </div>

         {/* checkout button */}
         <div className="p-4 bg-white sticky bottom-0">
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
               Checkout
            </button>
            <p className="text-sm tracking-tighter mt-2 text-gray-500 text-center">Shipping, Taxes and discount codes calculated at checkout</p>
         </div>
      </div>
   )
}

export default CartDrawer