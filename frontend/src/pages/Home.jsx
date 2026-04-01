import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'

const placeholderProducts = [
   { _id: 1, name: "Casual Shirt", price: 39.99, image: { url: "https://picsum.photos/500/500?random=7", alt: "Casual Shirt" } },
   { _id: 2, name: "Denim Jeans", price: 49.99, image: { url: "https://picsum.photos/500/500?random=8", alt: "Denim Jeans" } },
   { _id: 3, name: "Leather Boots", price: 89.99, image: { url: "https://picsum.photos/500/500?random=9", alt: "Leather Boots" } },
   { _id: 4, name: "Wool Sweater", price: 59.99, image: { url: "https://picsum.photos/500/500?random=10", alt: "Wool Sweater" } },
   { _id: 5, name: "Summer Dress", price: 29.99, image: { url: "https://picsum.photos/500/500?random=11", alt: "Summer Dress" } },
   { _id: 6, name: "Running Shoes", price: 69.99, image: { url: "https://picsum.photos/500/500?random=12", alt: "Running Shoes" } },
   { _id: 7, name: "Leather Handbag", price: 149.99, image: { url: "https://picsum.photos/500/500?random=13", alt: "Leather Handbag" } },
   { _id: 8, name: "Classic Watch", price: 199.99, image: { url: "https://picsum.photos/500/500?random=14", alt: "Classic Watch" } }
];

const Home = () => {
   return (
      <div>
         <Hero />
         <GenderCollectionSection />
         <NewArrivals />

         {/* best sellers */}
         <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
         <ProductDetails />

         {/* women section */}
         <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4">
               Top Wears for Women
            </h2>
            <ProductGrid products={placeholderProducts} />
         </div>

         {/* featured collection */}
         <FeaturedCollection />
         <FeaturesSection />
      </div>
   )
}

export default Home