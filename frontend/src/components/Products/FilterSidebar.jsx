import { useSearchParams } from "react-router"

const FilterSidebar = () => {
   // 📌 1. Only grab useSearchParams. Remove useState, useEffect, and useNavigate entirely.
   const [searchParams, setSearchParams] = useSearchParams();

   const categories = ["Shirts", "Pants", "Shoes", "Accessories"];
   const genders = ["Men", "Women"];
   const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Grey", "White", "Pink", "Brown", "Navy"];
   const sizes = ["XS", "S", "M", "L", "XL"];
   const materials = ["Cotton", "Denim", "Leather", "Wool"];
   const brands = ["Lacoste", "Nike", "Adidas", "Zara"];

   // 📌 2. Derive the filters DIRECTLY from the URL on every render.
   // No useEffect needed. When the URL changes, React re-renders and recalculates this automatically.
   const currentParams = Object.fromEntries([...searchParams]);
   const filters = {
      category: currentParams.category || "",
      gender: currentParams.gender || "",
      color: currentParams.color || "",
      size: currentParams.size ? currentParams.size.split(",") : [],
      material: currentParams.material ? currentParams.material.split(",") : [],
      brand: currentParams.brand ? currentParams.brand.split(",") : [],
      minPrice: parseInt(currentParams.minPrice) || 0,
      maxPrice: parseInt(currentParams.maxPrice) || 100
   };

   // Derive price range directly from the filters we just calculated
   const priceRange = [0, filters.maxPrice];

   const handleFilterChange = (e) => {
      const { name, value, type, checked } = e.target;

      // Copy the derived filters instead of local state
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

      // 📌 3. Just update the URL. Don't set local state. 
      updateURLParams(newFilters);
   }

   const handlePriceChange = (e) => {
      const newPrice = e.target.value;
      const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };

      // Just update the URL.
      updateURLParams(newFilters);
   }

   const updateURLParams = (newFilters) => {
      const params = new URLSearchParams();
      Object.keys(newFilters).forEach((key) => {
         if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
            params.append(key, newFilters[key].join(","));
         } else if (newFilters[key] && !Array.isArray(newFilters[key])) {
            params.append(key, newFilters[key]);
         }
      });

      // 📌 4. This automatically updates the URL in the browser AND triggers a re-render.
      // You do not need to call navigate() here.
      setSearchParams(params);
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
                        checked={filters.category === category}
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
                        checked={filters.gender === gender}
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
                        // Note: Because it's a button, we don't have checked={}, we use className logic
                        onClick={() => handleFilterChange({ target: { name: "color", value: color, type: "button" } })}
                        className={`h-8 w-8 rounded-full border border-gray-300 transition-transform duration-300 cursor-pointer group-hover:scale-110 ${filters.color === color ? 'ring-2 ring-black ring-offset-1' : ''}`}
                        style={{ backgroundColor: color.toLowerCase() }}
                     ></button>
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
                     checked={filters.size.includes(size)}
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
                     checked={filters.material.includes(material)}
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
                     checked={filters.brand.includes(brand)}
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
               value={priceRange[1]}
               onChange={handlePriceChange}
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