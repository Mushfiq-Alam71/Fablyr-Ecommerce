import { Link } from "react-router";

const ProductGrid = ({ products }) => {
   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
         {products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`} className="block">
               <div className="bg-white p-4 rounded-lg ">
                  <div className="w-full h-96 mb-4">
                     <img
                        src={product.image?.url}
                        alt={product.image?.alt}
                        className="w-full h-full object-cover rounded-lg " />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
               </div>
            </Link>
         ))}
      </div>
   )
}

export default ProductGrid