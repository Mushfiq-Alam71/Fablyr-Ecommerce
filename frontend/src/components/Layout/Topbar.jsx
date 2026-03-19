import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';


const Topbar = () => {
   return (
      <div className='bg-fablyr-red text-white'>
         <div className='container mx-auto justify-between items-center py-2 px-4 flex'>
            <div className='hidden md:flex items-center space-x-4 '>
               <a href="#" className='hover: text-gray-300'><TbBrandMeta /></a>
               <a href="#" className='hover: text-gray-300'><IoLogoInstagram /></a>
               <a href="#" className='hover: text-gray-300'><RiTwitterXLine /></a>
            </div>
            <div className='text-center text-sm grow'>
               <span>We Ship worldwide - Fast and reliable shipping!</span>
            </div>
            <div className='text-sm hidden md:block'>
               <a href="tel:+880-1844279927">Contact <span className='underline'>+880-1844279927</span></a>
            </div>
         </div>
      </div>
   )
}

export default Topbar