import { Link } from 'react-router'
import MensColletionImage from '../../../src/assets/mens-collection.jpg'
import WomensColletionImage from '../../../src/assets/womens-collection.jpg'

const GenderCollectionSection = () => {
   return (
      <div>
         <div className="container mx-auto flex flex-col md:flex-row gap-8 my-8">
            {/* Women's Collection */}
            <div className="relative flex-1">
               <img src={WomensColletionImage} alt="Women's Collection" className="w-full h-175 object-cover rounded-2xl" />
               <div className="absolute bottom-8 left-8 bg-white/90 p-4 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                     Women's Collection
                  </h2>
                  <Link
                     to="/collections/all?gender=Women"
                     className="text-gray-900 hover:underline">
                     Shop Now
                  </Link>
               </div>
            </div>
            {/* Men's Collection */}
            <div className="relative flex-1">
               <img src={MensColletionImage} alt="Men's Collection" className="w-full h-175 object-cover rounded-2xl" />
               <div className="absolute bottom-8 left-8 bg-white/90 p-4 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                     Men's Collection
                  </h2>
                  <Link
                     to="/collections/all?gender=Men"
                     className="text-gray-900 hover:underline">
                     Shop Now
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default GenderCollectionSection