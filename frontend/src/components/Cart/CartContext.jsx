import { RiDeleteBin5Fill, RiDeleteBin5Line } from "react-icons/ri";

const CartContext = () => {
   const cartProducts = [
      {
         productId: 1,
         name: "T-shirt",
         size: "M",
         color: "Red",
         quantity: 1,
         price: 19.99,
         image: "https://picsum.photos/200?random=1",
      },
      {
         productId: 2,
         name: "Jeans",
         size: "L",
         color: "Blue",
         quantity: 1,
         price: 19.99,
         image: "https://picsum.photos/200?random=5",
      },
   ];
   return (
      <div>
         {cartProducts.map((product, index) => (
            <div key={index} className=''>
               <div
                  key={index}
                  className="flex items-start justify-between py-4 border-b">
                  <div className='flex items-start'>
                     <img
                        src={product.image}
                        alt={product.name}
                        className='w-20 h-20 object-cover mr-4 rounded-lg' />
                     <div>
                        <h3>{product.name}</h3>
                        <p className='text-sm text-gray-500'>Size: {product.size} | Color: {product.color}</p>
                        <div className='flex items-center mt-2 gap-2'>
                           <button className='border rounded px-2 py-.5 text-xl font-medium'>-</button>
                           <button className='border rounded px-2 py-.5 text-xl font-medium'>+</button>
                        </div>
                     </div>
                  </div>
                  <div>
                     <p>$ {product.price.toLocaleString()}</p>
                     <button
                        className="group relative flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-red-50 active:scale-90"
                        aria-label="Remove item"
                     >
                        {/* 📌 The Outline Icon: Visible by default, fades to invisible on hover */}
                        <RiDeleteBin5Line
                           className="absolute h-6 w-6 text-gray-500 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                        />

                        {/* 📌 The Fill Icon: Invisible by default, fades to visible on hover */}
                        <RiDeleteBin5Fill
                           className="absolute h-6 w-6 text-red-600 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                     </button>
                  </div>
               </div>

            </div>
         ))
         }
      </div>
   )
}

export default CartContext