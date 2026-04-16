import { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa6';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {

   const [products, setProducts] = useState([]);
   const sidebarRef = useRef(null);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   }

   const handleClickOutside = (e) => {
      // close sidebar if clicked outside
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
         setIsSidebarOpen(false);
      }

   }

   useEffect(() => {
      // event listener for clicks
      document.addEventListener('mousedown', handleClickOutside)
      // clean event listener on unmount
      document.removeEventListener('mousedown', handleClickOutside)
   }, [])

   useEffect(() => {
      // Fetch products based on the collection/category
      setTimeout(() => {
         const fetchedProducts = [
            { _id: 1, name: "Casual Shirt", price: 39.99, image: { url: "https://picsum.photos/500/500?random=7", alt: "Casual Shirt" } },
            { _id: 2, name: "Denim Jeans", price: 49.99, image: { url: "https://picsum.photos/500/500?random=8", alt: "Denim Jeans" } },
            { _id: 3, name: "Leather Boots", price: 89.99, image: { url: "https://picsum.photos/500/500?random=9", alt: "Leather Boots" } },
            { _id: 4, name: "Wool Sweater", price: 59.99, image: { url: "https://picsum.photos/500/500?random=10", alt: "Wool Sweater" } },
            { _id: 5, name: "Summer Dress", price: 29.99, image: { url: "https://picsum.photos/500/500?random=11", alt: "Summer Dress" } },
            { _id: 6, name: "Running Shoes", price: 69.99, image: { url: "https://picsum.photos/500/500?random=12", alt: "Running Shoes" } },
            { _id: 7, name: "Leather Handbag", price: 149.99, image: { url: "https://picsum.photos/500/500?random=13", alt: "Leather Handbag" } },
            { _id: 8, name: "Classic Watch", price: 199.99, image: { url: "https://picsum.photos/500/500?random=14", alt: "Classic Watch" } }
         ]
         setProducts(fetchedProducts);
      }, 1000)
   }, [])

   return (
      <div className='flex flex-col lg:flex-row'>
         {/* mobile filter button */}
         <button onClick={toggleSidebar} className="lg:hidden border p-2 justify-center items-center">
            <FaFilter />
         </button>

         {/* filter sidebar */}
         <div ref={sidebarRef} className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
            <FilterSidebar />
         </div>
         <div className="grow p-4">
            <h2 className="text-2xl uppercase mb-4">
               All Collection
            </h2>
            {/* sort options */}
            <SortOptions />

            {/* product grid */}
            <ProductGrid products={products} />
         </div>
      </div>
   )
}

export default CollectionPage