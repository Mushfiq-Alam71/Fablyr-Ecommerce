import heroImg from '../../../src/assets/heroImg.jpg'

const Hero = () => {
   return (
      <section className='relative'>
         <img src={heroImg} alt="fablyr" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
         <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
            <div className='text-center text-white p-6'>
               <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>Vacation</h1>
               <p className="text-sm tracking-tighter md:text-lg mb-6 ">
                  Explore our vacation ready collection and find the perfect outfit for your next getaway.
               </p>
               <button className='bg-fablyr-red text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors duration-300 hover:scale-105 active:scale-95'>
                  Shop Now
               </button>
            </div>
         </div>
      </section>
   )
}

export default Hero