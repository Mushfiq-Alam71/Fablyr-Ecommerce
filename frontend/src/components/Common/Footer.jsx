import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaXTwitter, FaPinterestP } from 'react-icons/fa6';
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";


const Footer = () => {
   return (
      <footer className='border-t-2 border-gray-300 pt-12 pb-6'>
         {/* 📌 Changed to a 5-column grid on large screens to tighten the gaps */}
         <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 lg:px-0'>

            {/* newsletter - 📌 Spans 2 out of the 5 columns */}
            <div className='lg:col-span-2'>
               <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
               <p className='text-gray-500 mb-4 lg:w-4/5'>Be the first to know about our latest products and exclusive offers!</p>
               <p className='font-medium text-sm text-gray-600 mb-6'>Sign up and get 10% off your first order</p>

               {/* newsletter form */}
               <form action="" className='flex lg:w-4/5'>
                  <input
                     type="email"
                     placeholder='Enter your email'
                     className='p-3 w-full text-sm border-t border-b border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                  />
                  <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>
                     Subscribe
                  </button>
               </form>
            </div>

            {/* shop links */}
            <div>
               <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
               {/* ✅ FIXED HTML: Every link gets its own list item. The space-y-2 goes on the ul. */}
               <ul className='space-y-3 text-sm text-gray-600'>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Men</Link></li>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Women</Link></li>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Top Wear</Link></li>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Bottom Wear</Link></li>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Accessories</Link></li>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Sale</Link></li>
               </ul>
            </div>

            {/* support links */}
            <div>
               <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
               <ul className='space-y-3 text-sm text-gray-600'>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Contact Us</Link></li>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>FAQs</Link></li>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Shipping Policy</Link></li>
                  <li><Link to="#" className='hover:text-gray-900 transition-colors'>Returns & Exchanges</Link></li>
               </ul>
            </div>

            {/* follow us */}
            <div className='flex flex-col gap-6'>
               <div>
                  <h3 className='text-lg font-normal text-gray-800 mb-2'>Follow Us</h3>
                  <div className='flex items-center space-x-4'>
                     <Link to="#" className='text-gray-500 hover:text-gray-900 transition-colors'>
                        <FaFacebookF className='h-5 w-5' />
                     </Link>
                     <Link to="#" className='text-gray-500 hover:text-gray-900 transition-colors'>
                        <FaInstagram className='h-5 w-5' />
                     </Link>
                     <Link to="#" className='text-gray-500 hover:text-gray-900 transition-colors'>
                        <FaXTwitter className='h-5 w-5' />
                     </Link>
                     <Link to="#" className='text-gray-500 hover:text-gray-900 transition-colors'>
                        <FaPinterestP className='h-5 w-5' />
                     </Link>
                     <Link to="#" className='text-gray-500 hover:text-gray-900 transition-colors'>
                        <TbBrandMeta className='h-5 w-5' />
                     </Link>
                  </div>
               </div>
               <div>
                  <h3 className='text-lg font-normal text-gray-800 mb-2'>Contact Us</h3>
                  <p>
                     <FiPhoneCall className='inline-block mr-2 text-gray-500 hover:text-gray-900 transition-colors' />
                     <span className='text-gray-500 hover:text-gray-900 transition-colors'>+880-1844-279927</span>
                  </p>
               </div>
            </div>
         </div>
         <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
            <p className='text-center text-sm text-gray-500 tracking-tighter'>&copy; 2026 Fablyr. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;