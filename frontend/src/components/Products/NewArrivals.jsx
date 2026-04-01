import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router';
import useEmblaCarousel from 'embla-carousel-react';

const NewArrivals = () => {

   const newArrivals = [
      { _id: '1', name: 'Stylish Jacket', price: 79, image: [{ url: "https://picsum.photos/500/500.jpg?random=1", altText: "Stylish Jacket" }] },
      { _id: '2', name: 'Tshirt', price: 79, image: [{ url: "https://picsum.photos/500/500.jpg?random=2", altText: "Tshirt" }] },
      { _id: '3', name: 'Suit', price: 79, image: [{ url: "https://picsum.photos/500/500.jpg?random=3", altText: "Suit" }] },
      { _id: '4', name: 'Jeans', price: 79, image: [{ url: "https://picsum.photos/500/500.jpg?random=4", altText: "Jeans" }] },
      { _id: '5', name: 'Baggy', price: 79, image: [{ url: "https://picsum.photos/500/500.jpg?random=5", altText: "Baggy" }] },
      { _id: '6', name: 'Joggers', price: 79, image: [{ url: "https://picsum.photos/500/500.jpg?random=6", altText: "Joggers" }] },
      { _id: '7', name: 'Shoe', price: 79, image: [{ url: "https://picsum.photos/500/500.jpg?random=7", altText: "Shoe" }] },
   ];

   const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: true });

   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
   const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);


   const onSelect = useCallback((emblaApi) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
   }, []);

   useEffect(() => {
      if (!emblaApi) return;
      onSelect(emblaApi);
      emblaApi.on('reInit', onSelect).on('select', onSelect);
   }, [emblaApi, onSelect]);


   return (
      <section>
         <div className="relative container mx-auto text-center mt-20 mb-10 px-4 lg:px-0">
            <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
            <p className="text-lg text-gray-600 mb-8">Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion</p>

            {/* Navigation Buttons */}
            <div className="absolute right-4 lg:right-0 top-[60px] flex space-x-2 z-10">
               <button
                  onClick={scrollPrev}
                  disabled={prevBtnDisabled}
                  className={`p-2 rounded border transition-colors ${!prevBtnDisabled ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                  <FiChevronLeft className='text-2xl' />
               </button>
               <button
                  onClick={scrollNext}
                  disabled={nextBtnDisabled}
                  className={`p-2 rounded border transition-colors ${!nextBtnDisabled ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                  <FiChevronRight className='text-2xl' />
               </button>
            </div>

            <div className="overflow-hidden pb-4 cursor-grab active:cursor-grabbing" ref={emblaRef}>
               <div className="flex gap-6">

                  {newArrivals.map((product) => (
                     <div
                        key={product._id}
                        className="relative min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_30%] select-none"
                     >
                        <img
                           src={product.image[0]?.url}
                           alt={product.image[0]?.altText || product.name}
                           className='w-full h-[500px] object-cover rounded-lg'
                           draggable="false"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white p-4 rounded-b-lg text-left">
                           <Link to={`/product/${product._id}`} className='block hover:text-gray-200 transition-colors'>
                              <h4 className='font-medium'>{product.name}</h4>
                              <p className='mt-1'>${product.price}</p>
                           </Link>
                        </div>
                     </div>
                  ))}

               </div>
            </div>

         </div>
      </section>
   );
};

export default NewArrivals;