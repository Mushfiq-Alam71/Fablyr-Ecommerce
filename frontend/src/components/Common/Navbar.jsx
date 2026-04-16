import { Link } from 'react-router';
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from './SearchBar';
import { HiBars3 } from "react-icons/hi2";
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const navItems = [
   { id: 1, label: 'Men', path: '/collections/all', category: 'men' },
   { id: 2, label: 'Women', path: '/women', category: 'women' },
   { id: 3, label: 'Top Wear', path: '/top-wear', category: 'top-wear' },
   { id: 4, label: 'Bottom Wear', path: '/bottom-wear', category: 'bottom-wear' },
   { id: 5, label: 'Accessories', path: '/accessories', category: 'accessories' },
   { id: 6, label: 'Sale', path: '/sale', category: 'sale', isFeatured: true }
]

const Navbar = () => {
   const [drawerOpen, setDrawerOpen] = useState(false);
   const [navDrawerOpen, setNavDrawerOpen] = useState(false);

   const toggleNavDrawer = () => {
      setNavDrawerOpen(!navDrawerOpen);
   }

   const toggleCartDrawer = () => {
      setDrawerOpen(!drawerOpen);
   }
   return (
      <>
         <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
            {/* left logo */}
            <div>
               <Link to="/" className="text-2xl space-x-6 font-bold italic">
                  Fablyr
               </Link>
            </div>

            {/* navigation links */}
            <div className='hidden md:flex items-center space-x-6'>
               {navItems.map((item) => (
                  <Link
                     key={item.id}
                     to={item.path}
                     className='textgrey-700 hover:text-black text-sm font-medium uppercase'
                  >
                     {item.label}
                  </Link>
               ))}
            </div>

            {/* right icons */}
            <div className='flex items-center space-x-4'>
               <Link to='/profile' rel="stylesheet" href="">
                  <HiOutlineUser className='h-6 w-6 text-gray-700' />
               </Link>
               <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                  <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                  <span className='absolute -top-1 bg-fablyr-red text-white text-xs rounded-full px-1.5 py-0.3'>4</span>
               </button>

               {/* Search */}
               <div className='overflow-hidden'>
                  <SearchBar />
               </div>

               {/* mobile hamburger button */}
               <button onClick={toggleNavDrawer} className='md:hidden'>
                  <HiBars3 className='h-6 w-6 text-gray-700' />
               </button>
            </div>
         </nav>
         <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

         {/* 
         

         */}

         {/* mobile navigation */}
         <div
            className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 
            ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`
            }>
            <div className='flex justify-end p-4'>
               <button onClick={toggleNavDrawer}>
                  <IoMdClose className='h-6 w-6 text-gray-700 transition-all duration-300 hover:text-fablyr-red  hover:scale-140' />
               </button>
            </div>
            <div className='px-2'>
               <h2 className='text-xl font-semibold italic'>Mob Navs</h2>
               <nav className=''>
                  <div className='flex flex-col md:flex items-start gap-4 space-x-6 mt-4 '>
                     {navItems.map((item) => (
                        <Link
                           key={item.id}
                           to={item.path}
                           className='textgrey-700 hover:text-black text-sm font-medium uppercase'
                        >
                           {item.label}
                        </Link>
                     ))}
                  </div>
               </nav>
            </div>
         </div>
      </>
   )
}

export default Navbar

