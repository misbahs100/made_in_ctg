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

         <div className="">
            {/* header */}

            <main className="my-8">
               <div className="container mx-auto px-6">
                  <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')" }}>
                     <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                           <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                           <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                           <Link to="/all">
                              <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <span>Shop Now</span>
                                 <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="md:flex mt-8 md:-mx-4">
                     <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')" }}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                           <div className="px-10 max-w-xl">
                              <h2 className="text-2xl text-white font-semibold">Back Pack</h2>
                              <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                              <Link to="/all">
                                 <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Shop Now</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                 </button>
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')" }}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                           <div className="px-10 max-w-xl">
                              <h2 className="text-2xl text-white font-semibold">Games</h2>
                              <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                              <Link to="/all">
                                 <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Shop Now</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                 </button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-16">

                     <Link to="/all">
                        <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                           <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                           <svg className="h-5 w-5 mx-2 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>

                        </button>
                     </Link>
                     <p>Check out the latest fasion products to elevate your home, body and presence.</p>
                     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        <Link to="product-details/T6jN8cgq3BAMYmamQ2et">
                           <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://cdn.cosmostore.org/cache/front/shop/products/634/1957763/350x350.jpg')" }}>
                                 {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button> */}
                              </div>
                              <div className="px-5 py-3">
                                 <h3 className="text-gray-700 uppercase">Aqua di Gio</h3>
                                 <span className="text-gray-500 mt-2">12000</span>
                              </div>
                           </div>
                        </Link>
                        <Link to="/product-details/bBNb9Giphz0xuSuLqE7t">
                           <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')" }}>
                                 {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button> */}
                              </div>
                              <div className="px-5 py-3">
                                 <h3 className="text-gray-700 uppercase">Man Mix</h3>
                                 <span className="text-gray-500 mt-2">$12</span>
                              </div>
                           </div>
                        </Link>
                        <Link to="/product-details/TvoWshu27GC4zmzAKUuv">
                           <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')" }}>
                                 {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button> */}
                              </div>
                              <div className="px-5 py-3">
                                 <h3 className="text-gray-700 uppercase">classNameic watch</h3>
                                 <span className="text-gray-500 mt-2">$12</span>
                              </div>
                           </div>
                        </Link>
                        <Link to="/product-details/ypgAN9WKSpiH9DB3vtWM">
                           <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://img.myipadbox.com/sec/product_l/ZY51456924AJ.jpg')" }}>
                                 {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button> */}
                              </div>
                              <div className="px-5 py-3">
                                 <h3 className="text-gray-700 uppercase">woman mix</h3>
                                 <span className="text-gray-500 mt-2">$12</span>
                              </div>
                           </div>
                        </Link>
                     </div>
                  </div>


                  <div className="mt-16">
                     <Link to="/all">
                        <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                           <h3 className="text-gray-600 text-2xl font-medium">Technologies</h3>
                           <svg className="h-5 w-5 mx-2 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>

                        </button>
                     </Link>
                     <p>Inspire yourself with the latest tech-products. Run before others.</p>
                     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        <Link to="/product-details/SocIhCtgteVvMpG7K1VP">
                           <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJO3EiLBU7WNe9MTooCVFPCSaVCvAQuJTyA&s" }}>
                                 {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button> */}
                              </div>
                              <div className="px-5 py-3">
                                 <h3 className="text-gray-700 uppercase">Ryzen 5700</h3>
                                 <span className="text-gray-500 mt-2">14000</span>
                              </div>
                           </div>
                        </Link>
                        <Link to="/product-details/vfK2TNYC94Gpvo5sJHn0">
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1J-imHvWLwk2_ANWxdzTGi1kIt7HspDp-nw&s')" }}>
                              {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button> */}
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">Chuwi HeroBook Pro</h3>
                              <span className="text-gray-500 mt-2">28000</span>
                           </div>
                        </div>
                        </Link>
                        <Link to="/product-details/ijeHX0R4zHQMBFkQNI5Z">
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}>
                              {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button> */}
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">Canon Pixma IP</h3>
                              <span className="text-gray-500 mt-2">7900</span>
                           </div>
                        </div>
                        </Link>
                        <Link to="/product-details/UZwPN0Kfbl2VrJnYchkN">
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                           <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9kf10MG8wfstWyPBICVUiBWTwtyVgVCgpw&s')" }}>
                              {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                 <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              </button> */}
                           </div>
                           <div className="px-5 py-3">
                              <h3 className="text-gray-700 uppercase">San Andrease</h3>
                              <span className="text-gray-500 mt-2">998</span>
                           </div>
                        </div>
                        </Link>
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
