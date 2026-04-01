import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2";

const FeaturesSection = () => {
   return (
      <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
         {/* feature 1 */}
         <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
               <HiShoppingBag className="text-xl mx-auto mb-2" />
               <h4 className="tracking-tighter mb-2">Free International Shipping</h4>
               <p className="text-gray-600 text-sm tracking-tighter">
                  On all orders over $100
               </p>
            </div>
         </div>
         {/* feature 2 */}
         <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
               <HiArrowPathRoundedSquare className="text-xl mx-auto mb-2" />
               <h4 className="tracking-tighter mb-2">45-Day Return</h4>
               <p className="text-gray-600 text-sm tracking-tighter">
                  Money back guarantee if you're not satisfied
               </p>
            </div>
         </div>
         {/* feature 3 */}
         <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
               <HiOutlineCreditCard className="text-xl mx-auto mb-2" />
               <h4 className="tracking-tighter mb-2">Secure Payment</h4>
               <p className="text-gray-600 text-sm tracking-tighter">
                  Your payment information is protected
               </p>
            </div>
         </div>
      </section>
   )
}

export default FeaturesSection