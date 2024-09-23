import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminOnlyLink } from "../adminRoute/AdminRoute";
// firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { removeActiveUser, setActiveUser } from "../../redux/slice/authSlice";
import { calculateSubtotal, calculateTotalQuantity } from "../../redux/slice/cartSlice";
import { formatPrice } from "../../utils/formatPrice";

const Navbar = () => {
  const { isUserLoggedIn, userName } = useSelector((store) => store.auth);
  const { totalAmount, totalQuantity, cartItems } = useSelector((store) => store.cart);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* Monitor currently signed USER
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (displayName == null) {
          setDisplayName(user.email.split("@")[0]);
        }
        dispatch(
          setActiveUser({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userId: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(removeActiveUser());
      }
    });
  }, []);

  function logOutUser() {
    signOut(auth)
      .then(() => {
        toast.success("User Signed Out ");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.code, error.message);
      });
  }
  let activeStyle = {
    borderBottom: "2px solid white",
  };

  useEffect(() => {
    dispatch(calculateTotalQuantity());
    dispatch(calculateSubtotal());
  }, [dispatch, cartItems]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-[8vh] bg-neutral shadow-xl ">
        <div className="navbar w-full md:w-9/12 mx-auto flex items-center justify-between">
          <section className="md:gap-4">
            <Link to="/" className="btn btn-ghost ">
              <h1 className="logo text-white text-lg md:text-3xl ">E-Shop.com</h1>
            </Link>
          </section>
          <div>
            <ul className="flex items-center gap-x-6">
              <li className="hidden lg:block text-white text-xs md:text-xl">
                <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)} end>
                  Home
                </NavLink>
              </li>
              <li className="hidden lg:block text-white text-xs md:text-xl">
                <NavLink to="/all" style={({ isActive }) => (isActive ? activeStyle : null)}>
                  All Products
                </NavLink>
              </li>
              <li className="hidden lg:block text-white text-xs md:text-xl">
                <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : null)}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:gap-2">
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <AiOutlineShoppingCart size={30} color="white" />
                  <span className="badge badge-primary indicator-item">{totalQuantity}</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100  shadow-xl "
              >
                <div className="card-body">
                  <span className="font-bold text-lg">{totalQuantity} Items</span>
                  <span>Subtotal: {formatPrice(totalAmount)}</span>
                  <div className="card-actions">
                    <Link to="/cart" className="btn btn-primary btn-block">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end ml-4">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  <img
                    src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-white-blue-png-image_3918443.jpg"
                    alt="dp"
                    className="w-10 h-10 object-fill"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {userName && (
                  <li className="bg-primary text-gray-200">
                    <p className="block">
                      Welcome, <span className="font-bold">{userName}</span>
                    </p>
                  </li>
                )}
                <div className="block lg:hidden">
                  <li>
                    <Link to="/" className="text-lg ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/all" className="text-lg ">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-lg">
                      Contact Us
                    </Link>
                  </li>
                </div>

                {isUserLoggedIn ? (
                  <div>
                    <li>
                      <Link to="/my-orders" className="text-lg text-primary">
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex justify-between hover:bg-red-100  text-red-500 text-lg"
                        onClick={logOutUser}
                      >
                        LOGOUT
                      </Link>
                    </li>
                  </div>
                ) : (
                  <li>
                    <label htmlFor="my-modal-4" className="modal-button text-lg text-primary">
                      Login
                    </label>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Location Indicator */}
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
              </svg>
              <span className="mx-1 text-sm">Bangladesh</span>
            </div>

            {/* Brand Name */}
            <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
              MADE <sub>in</sub>CTG
            </div>

            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center justify-end w-full">
              <button onClick={() => console.log('cartOpen')} className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>

              {/* Hamburger Menu for Mobile */}
              <div className="flex sm:hidden">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="sm:hidden">
              <div className="flex flex-col">
                <a className="mt-3 text-gray-600 hover:underline" href="#">Home</a>
                <a className="mt-3 text-gray-600 hover:underline" href="#">Shop</a>
                <a className="mt-3 text-gray-600 hover:underline" href="#">Categories</a>
                <a className="mt-3 text-gray-600 hover:underline" href="#">Contact</a>
                <a className="mt-3 text-gray-600 hover:underline" href="#">About</a>
              </div>
            </nav>
          )}

          {/* Desktop Menu */}
          <nav className="hidden sm:flex sm:justify-center sm:items-center mt-4">
            <div className="flex flex-col sm:flex-row">
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
          </div>
        </div>
      </header>



      <AdminOnlyLink>
        <div className="min-w-screen h-10  py-1 bg-red-200 text-red-700 font-bold text-center cursor-pointer">
          <span>ADMIN</span>
          <Link to="/admin/home" className="btn btn-primary btn-sm mx-4">
            VIEW DASHBOARD
          </Link>
        </div>
      </AdminOnlyLink>
      {/* <div className="min-w-screen py-2 bg-accent flex items-center justify-center">
        <p className="uppercase font-medium inline-block mx-2">Sale end in </p>
        <Countdown />
      </div> */}
    </>
  );
};

export default Navbar;
