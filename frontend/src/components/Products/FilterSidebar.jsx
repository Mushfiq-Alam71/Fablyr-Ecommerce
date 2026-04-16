import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"

const FilterSidebar = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [filters, setFilters] = useState({
      category: "",
      gender: "",
      color: "",
      size: "",
      material: "",
      brand: "",
      minPrice: 0,
      maxPrice: 100
   })

   const [priceRange, setPriceRange] = useState([0, 100]);

   const categories = ["Shirts", "Pants", "Shoes", "Accessories"];

   const genders = ["Men", "Women"];

   const colors = ["Red", "Blue", "Green", "Black", "White"];

   const sizes = ["XS", "S", "M", "L", "XL"];

   const materials = ["Cotton", "Denim", "Leather", "Wool"];

   const brands = ["Lacoste", "Nike", "Adidas", "Zara"];

   useEffect(() => {
      const params = Object.fromEntries([...searchParams]);

      setFilters({
         category: params.category || "",
         gender: params.gender || "",
         color: params.color || "",
         size: params.size ? params.size.split(",") : [],
         material: params.material ? params.material.split(",") : [],
         brand: params.brand ? params.brand.split(",") : [],
         minPrice: parseInt(params.minPrice) || 0,
         maxPrice: parseInt(params.maxPrice) || 100
      });
      setPriceRange([0, params.maxPrice || 100])
   }, [searchParams])

   const handleFilterChange = (e) => {
      const { name, value, type, checked } = e.target;

      let newFilters = { ...filters };

      if (type === 'checkbox') {
         if (checked) {
            newFilters[name] = [...(newFilters[name] || []), value];
         } else {
            newFilters[name] = newFilters[name].filter((item) => item !== value);
         }
      } else {
         newFilters[name] = value;
      }
      setFilters(newFilters);
      console.log(newFilters)
   }

   return (

      <div className="p-4 bg-red-50 rounded-lg ml-4 my-4">
         <h3 className="text-xl font-medium mb-4 text-gray-800">Filters</h3>

         {/* Category Filter */}
         <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Category</label>
            {
               categories.map((category) => (
                  <div key={category} className="flex items-center mb-1">
                     <input
                        type="radio"
                        name="category"
                        onChange={handleFilterChange}
                        value={category}
                        className="mr-2 h-4 w-4 accent-black border-gray-300" />
                     <span className="text-gray-700">{category}</span>
                  </div>
               ))
            }
         </div>

         {/* Gender Filter */}
         <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Gender</label>
            {
               genders.map((gender) => (
                  <div key={gender} className="flex items-center mb-1">
                     <input
                        type="radio"
                        name="gender"
                        value={gender}
                        onChange={handleFilterChange}
                        className="mr-2 h-4 w-4 accent-black rounded cursor-pointer border-gray-300" />
                     <span className="text-gray-700">{gender}</span>
                  </div>
               ))
            }
         </div>

         {/* Color Filter */}
         <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-3">Color</label>
            <div className="flex flex-wrap gap-4">
               {colors.map((color) => (
                  <div key={color} className="flex items-center gap-2 cursor-pointer group">
                     <button
                        type="button"
                        name="color"
                        value={color}
                        onClick={handleFilterChange}
                        className={`h-8 w-8 rounded-full border border-gray-300 transition-transform duration-300 cursor-pointer group-hover:scale-110 ${filters.color === color ? 'ring-2 ring-black ring-offset-1' : ''
                           }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                     ></button>
                     <span className="text-gray-700 font-medium">{color}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Size Filter */}
         <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-3">Size</label>
            {sizes.map((size) => (
               <div key={size} className="flex items-center mb-1">
                  <input
                     type="checkbox"
                     name="size"
                     value={size}
                     onChange={handleFilterChange}
                     className="mr-2 h-4 w-4 accent-black cursor-pointer border-gray-300"
                  />
                  <span className="text-gray-700 font-medium text-sm">{size}</span>
               </div>
            ))}
         </div>

         {/* Material Filter */}
         <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-3">Material</label>
            {materials.map((material) => (
               <div key={material} className="flex items-center mb-1">
                  <input
                     type="checkbox"
                     name="material"
                     value={material}
                     onChange={handleFilterChange}
                     className="mr-2 h-4 w-4 accent-black cursor-pointer border-gray-300"
                  />
                  <span className="text-gray-700 font-medium">{material}</span>
               </div>
            ))}
         </div>

         {/* Brand Filter */}
         <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-3">Brand</label>
            {brands.map((brand) => (
               <div key={brand} className="flex items-center mb-1">
                  <input
                     type="checkbox"
                     name="brand"
                     value={brand}
                     onChange={handleFilterChange}
                     className="mr-2 h-4 w-4 accent-black cursor-pointer border-gray-300"
                  />
                  <span className="text-gray-700 font-medium">{brand}</span>
               </div>
            ))}
         </div>

         {/* price range */}
         <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Price Range</label>
            <input
               type="range"
               name="priceRange"
               min={0}
               max={100}
               onChange={handleFilterChange}
               className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-gray-600 mt-2">
               <span>$0</span>
               <span>${priceRange[1]}</span>
            </div>
         </div>
      </div>
   )
}

export default FilterSidebar