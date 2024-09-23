import hero from "../../assets/hero3.png";
import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
import { useEffect, useState } from "react";
const tags = ["Mobiles", "Electronics", "Bags", "Clothes", "Jwellery"];

let currentIndex = 0;
const Hero = () => {
   const [tagName, setTagName] = useState("");
   function updateCountdown() {
      const currentItem = tags[currentIndex];
      setTagName(currentItem);
      currentIndex = (currentIndex + 1) % tags.length;
      setTimeout(updateCountdown, 2000);
   }

   useEffect(() => {
      updateCountdown();
   }, []);

   return (

      <>
         {/* <main classNameName="bg-base-100 w-full md:w-9/12 min-h-[92vh] mx-auto flex flex-col items-start justify-center ">
            <div classNameName="container px-6 py-16 mx-auto">
               <div classNameName="items-center lg:flex">
                  <div classNameName="w-full lg:w-1/2">
                     <div classNameName="lg:max-w-lg">
                        <p classNameName="text-4xl font-bold text-neutral lg:text-4xl">
                           Best place to choose <br /> your{" "}
                           <span classNameName="text-blue-500 opacity-100 transition-opacity duration-2000">
                              {tagName}
                           </span>
                        </p>

                        <p classNameName="mt-3 text-gray-600 dark:text-gray-400">
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Porro beatae error laborum ab amet sunt
                           recusandae? Reiciendis natus perspiciatis optio.
                        </p>

                        <Link to="/all">
                           <button classNameName="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                              Shop Now
                           </button>
                        </Link>
                     </div>
                  </div>

                  <div classNameName="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                     <img
                        classNameName="w-full h-full lg:max-w-3xl"
                        src="https://merakiui.com/images/components/Catalogue-pana.svg"
                        alt="Catalogue-pana.svg"
                     />
                  </div>
               </div>
            </div>
         </main> */}

         <div className="bg-white">
            {/* header */}

            <main className="my-8">
               <div className="container mx-auto px-6">
                  <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')"}}>
                     <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                           <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                           <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                           <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                              <span>Shop Now</span>
                              <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="md:flex mt-8 md:-mx-4">
                     <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"}}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                           <div className="px-10 max-w-xl">
                              <h2 className="text-2xl text-white font-semibold">Back Pack</h2>
                              <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                 <span>Shop Now</span>
                                 <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                           <div className="px-10 max-w-xl">
                              <h2 className="text-2xl text-white font-semibold">Games</h2>
                              <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                 <span>Shop Now</span>
                                 <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-16">
                     <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"}}>
                              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button>
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">Chanel</h3>
                              <span className="text-gray-500 mt-2">$12</span>
                           </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"}}>
                              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button>
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">Man Mix</h3>
                              <span className="text-gray-500 mt-2">$12</span>
                           </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"}}>
                              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button>
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">classNameic watch</h3>
                              <span className="text-gray-500 mt-2">$12</span>
                           </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')"}}>
                              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button>
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">woman mix</h3>
                              <span className="text-gray-500 mt-2">$12</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-16">
                     <h3 className="text-gray-600 text-2xl font-medium">Technologies</h3>
                     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"}}>
                              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button>
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">Chanel</h3>
                              <span className="text-gray-500 mt-2">$12</span>
                           </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"}}>
                              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button>
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">Man Mix</h3>
                              <span className="text-gray-500 mt-2">$12</span>
                           </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"}}>
                              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button>
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">classNameic watch</h3>
                              <span className="text-gray-500 mt-2">$12</span>
                           </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')"}}>
                              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button>
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">woman mix</h3>
                              <span className="text-gray-500 mt-2">$12</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main>

            <footer className="bg-gray-200">
               <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                  <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">MADE <sub>in</sub>CTG</a>
                  <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
               </div>
            </footer>
         </div>




      </>
   );
};

export default Hero;
