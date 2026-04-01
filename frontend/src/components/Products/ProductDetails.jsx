import { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
   name: "Stylish Jacket",
   price: 79.99,
   originalPrice: 99.99,
   description: "A trendy jacket perfect for any season.",
   brand: "FashionCo",
   material: "Leather",
   sizes: ["S", "M", "L", "XL"],
   colors: ["Black", "Brown", "Navy"],
   images: [
      {
         url: "https://picsum.photos/500/500?random=1", // 📌 Fixed missing //
         alt: "Stylish Jacket - Front View"
      },
      {
         url: "https://picsum.photos/500/500?random=2", // 📌 Fixed missing //
         alt: "Stylish Jacket - Back View"
      }
   ]
};

const similarProducts = [
   { _id: 1, name: "Casual Shirt", price: 39.99, image: { url: "https://picsum.photos/500/500?random=3", alt: "Casual Shirt" } },
   { _id: 2, name: "Denim Jeans", price: 49.99, image: { url: "https://picsum.photos/500/500?random=4", alt: "Denim Jeans" } },
   { _id: 3, name: "Leather Boots", price: 89.99, image: { url: "https://picsum.photos/500/500?random=5", alt: "Leather Boots" } },
   { _id: 4, name: "Wool Sweater", price: 59.99, image: { url: "https://picsum.photos/500/500?random=6", alt: "Wool Sweater" } }
]

const ProductDetails = () => {
   const [mainImage, setMainImage] = useState(selectedProduct?.images[0]?.url || '');
   const [quantity, setQuantity] = useState(1);
   const [selectedColor, setSelectedColor] = useState('');
   const [selectedSize, setSelectedSize] = useState('');
   const [isButtonDisabled, setIsButtonDisabled] = useState(false);

   const handleAddToCart = () => {
      if (!selectedColor || !selectedSize) {
         toast.error("Please select a color and size before adding to cart.", {
            duration: 1500,
         });
         return;
      }
      setIsButtonDisabled(true);

      setTimeout(() => {
         toast.success("Product added to cart!", {
            duration: 1500,
         });
         setIsButtonDisabled(false);
      }, 500);
   }

   return (
      <div className='p-6'>
         <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">

               {/* left thumbnail */}
               <div className="hidden md:flex flex-col space-y-4">
                  {selectedProduct.images.map((image, index) => (
                     <img
                        key={index}
                        src={image.url}
                        alt={image.alt}
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all ${mainImage === image.url ? 'ring-2 ring-black' : 'border opacity-70 hover:opacity-100'}`}
                        onClick={() => setMainImage(image.url)}
                     />
                  ))}
               </div>

               {/* main image */}
               <div className="md:w-1/2">
                  <div className="mb-4">
                     <img
                        src={mainImage}
                        alt="Main Product"
                        className="w-full h-125 object-cover rounded-lg"
                     />
                  </div>
               </div>

               {/* mobile thumbnails */}
               <div className="md:hidden flex overflow-x-auto space-x-4 mb-4 scrollbar-hide">
                  {selectedProduct.images.map((image, index) => (
                     <img
                        key={index}
                        src={image.url}
                        alt={image.alt}
                        className={`w-20 h-20 shrink-0 object-cover rounded-lg cursor-pointer transition-all ${mainImage === image.url ? 'ring-2 ring-black' : 'border'}`}
                        onClick={() => setMainImage(image.url)}
                     />
                  ))}
               </div>

               {/* right side */}
               <div className="md:w-1/2">
                  <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                     {selectedProduct.name}
                  </h1>
                  {/* 📌 Format price cleanly */}
                  <div className="flex items-center gap-3 mb-4">
                     <p className="text-lg font-bold text-gray-900">${selectedProduct.price}</p>
                     {selectedProduct.originalPrice && (
                        <p className="text-lg text-gray-500 line-through">${selectedProduct.originalPrice}</p>
                     )}
                  </div>
                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                  {/* color button */}
                  <div className="mb-6">
                     <p className="text-gray-700 font-medium">Color:</p>
                     <div className="flex gap-2 mt-2">
                        {selectedProduct.colors.map((color) => (
                           <button
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`w-8 h-8 rounded-full border border-gray-300 hover:scale-110 transition-transform ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                              style={{
                                 backgroundColor: color.toLowerCase(),
                              }}
                           ></button>
                        ))}
                     </div>
                  </div>

                  {/* size button */}
                  <div className="mb-6">
                     <p className="text-gray-700 font-medium">Sizes:</p>
                     <div className="flex gap-2 mt-2">
                        {selectedProduct.sizes.map((size) => (
                           <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-3 py-1 border rounded hover:bg-gray-200 transition-colors ${selectedSize === size ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}>
                              {size}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* quantity */}
                  <div className="mb-6">
                     <p className="text-gray-700 font-medium">Quantity:</p>
                     <div className="flex items-center space-x-4 mt-2">
                        <button
                           onClick={() => setQuantity(Math.max(1, quantity - 1))}
                           className="px-3 py-1 bg-gray-200 rounded text-lg border hover:bg-gray-300 transition-colors"
                        >
                           -
                        </button>
                        <span className="text-lg font-medium w-4 text-center">{quantity}</span>
                        <button
                           onClick={() => setQuantity(quantity + 1)}
                           className="px-3 py-1 bg-gray-200 rounded text-lg border hover:bg-gray-300 transition-colors"
                        >
                           +
                        </button>
                     </div>
                  </div>

                  {/* add to cart button */}
                  <button
                     onClick={handleAddToCart}
                     disabled={isButtonDisabled}
                     className={`bg-black text-white py-3 px-6 rounded-lg w-full mb-8 hover:bg-gray-800 transition-colors active:scale-95 ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-800 "}`}>
                     {isButtonDisabled ? "Adding..." : "Add to Cart"}
                  </button>

                  <div className="text-gray-700 border-t pt-6">
                     <h3 className="text-lg font-bold mb-4">Characteristics:</h3>
                     <table className="w-full text-left text-sm text-gray-600">
                        <tbody>
                           <tr className="border-b">
                              <td className="py-2 font-medium">Brand</td>
                              <td className="py-2">{selectedProduct.brand}</td>
                           </tr>
                           <tr>
                              <td className="py-2 font-medium">Material</td>
                              <td className="py-2">{selectedProduct.material}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div className="mt-20">
               <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
               <ProductGrid products={similarProducts} />
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;