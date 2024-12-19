import React, { useState } from "react";
import { HiAcademicCap, HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/order",
  },
  {
    name: "Cart Page",
    href: "/CartPage",
  },
  {
    name: "Checkout",
    href: "/Checkout",
  },
];
const Navbar = () => {
  const currentuser = true;
  const [isDropDown, setisDropDown] = useState(false);
  const cartItems=useSelector(state=>state.cart.cartItems)
  console.log(isDropDown);
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <NavLink to="/">
            <HiMenu className="w-6 h-6" />
          </NavLink>
          <div className="relative sm:w-72 w-40 space-x-2">
            <FaSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search for books..."
              className="focus:outline-none py-1 w-full bg-gray-200 text-sm md:px-8 px-6 rounded-md"
            />
          </div>
        </div>
        <div className=" relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentuser ? (
              <>
                <button onClick={() => setisDropDown(!isDropDown)}>
                  <img src={avatarImg} />
                </button>
                {
                    isDropDown&&(
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                            <ul className="py-2">
                                {
                                    navigation.map((item)=>(
                                        <li key={item.name} onClick={()=>setisDropDown(false)}>
                                            <NavLink to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
              </>
            ) : (
              <NavLink>
                <CiUser className="size-6" />
              </NavLink>
            )}
          </div>

          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>
          <NavLink
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <CiShoppingCart className="w-6 h-6" />
            {
              cartItems.length > 0 && <span className="text-sm font-semibold sm:ml-1" >{cartItems.length}</span>
              
            }
            
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
