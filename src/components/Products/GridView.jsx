import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { FcSearch } from "react-icons/fc";
//  lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const GridView = ({ products }) => {
	const dispatch = useDispatch();
	if (!products.length) {
		return <h1 className="text-3xl font-bold">No Products Found</h1>;
	}

	function add2CartFunction(product) {
		dispatch(addToCart(product));
	}

	return (
		<div className=" flex flex-wrap gap-y-5 py-10 ">
			{products.map((product) => {
				const { id, imageURL, name, price } = product;
				return (
					<div style={{width:'100% !important'}}  key={id} className="relative w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden group bg-white">
						{/* Product Image */}
						<LazyLoadImage
							src={imageURL}
							alt={name}
							className="w-full h-60 md:h-72 object-cover rounded-t-md"
							placeholderSrc="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
							effect="blur"
						/>

						{/* Free Delivery Badge */}
						<div className="absolute top-0 right-0 m-2">
							<span className="bg-blue-400 text-white text-sm px-2 py-1 rounded-md shadow-lg">Free Delivery</span>
						</div>

						{/* Product Details */}
						<div className="px-5 py-3">
							<h3 className="text-gray-700 uppercase font-semibold">{name}</h3>
							<span className="text-gray-600 mt-2 block font-medium">৳ {price}</span>
						</div>

						{/* Hover Overlay */}
						<div className="absolute top-0 right-0 h-full w-full bg-[rgba(0,0,0,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

						{/* View Details Button (Search Icon) */}
						<Link to={`/product-details/${id}`}>
							<button className="absolute top-1/3 left-[45%] text-white hidden group-hover:block transition-all ease-in duration-300">
								<FcSearch size={42} />
							</button>
						</Link>

						{/* Add to Cart Button */}
						<button
							className="absolute bottom-1/3 left-[30%] bg-gold text-white btn btn-sm hidden group-hover:block transition-all ease-in duration-300"
							onClick={() => add2CartFunction(product)}
						>
							Add to Cart
						</button>
					</div>



					// <div key={id} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
					// 	<div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')" }}>

					// 	</div>
					// 	<div className="px-5 py-3">
					// 		<h3 className="text-gray-700 uppercase">Chanel</h3>
					// 		<span className="text-gray-500 mt-2">12000</span>
					// 	</div>
					// </div>
				);
			})}
		</div>
	);
};

export default React.memo(GridView);
