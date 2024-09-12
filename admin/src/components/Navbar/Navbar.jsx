import React from "react";
// import "./Navbar.css";
// import { assets } from "../../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <span>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
<path d="M0 0 C3.57749297 2.84573304 5.93327685 5.51976276 7 10 C7.06506801 13.57874029 6.81975714 15.9262336 4.61328125 18.81640625 C1.52934226 21.80332244 -0.11916979 22.98427089 -4.5 23.0625 C-8.27591873 21.91623896 -11.52275986 20.87770967 -15 19 C-15.9375 16.8125 -15.9375 16.8125 -16 15 C-15.01 15 -14.02 15 -13 15 C-13.0825 13.96875 -13.165 12.9375 -13.25 11.875 C-12.95803692 7.3495723 -11.83092283 5.47799091 -9 2 C-5.48175489 -0.34549674 -4.14224306 -0.57991403 0 0 Z M-8 4.6875 C-10.18779243 7.21713499 -10.63635509 8.72719584 -11 12 C-9.68 12 -8.36 12 -7 12 C-6.34 9.03 -5.68 6.06 -5 3 C-6.30875187 2.89252151 -6.30875187 2.89252151 -8 4.6875 Z M0 4 C0.33 8.62 0.66 13.24 1 18 C4.1640182 15.47476889 4.1640182 15.47476889 4.1796875 13.0625 C4.07914063 12.381875 3.97859375 11.70125 3.875 11 C3.78992188 10.319375 3.70484375 9.63875 3.6171875 8.9375 C3.02502009 6.56589282 3.02502009 6.56589282 0 4 Z " fill="#A35AD4" transform="translate(20,3)"/>
<path d="M0 0 C3.57749297 2.84573304 5.93327685 5.51976276 7 10 C7.06506801 13.57874029 6.81975714 15.9262336 4.61328125 18.81640625 C2.81192804 20.56108767 1.23160582 21.85131488 -1 23 C-4.9375 22.875 -4.9375 22.875 -8 22 C-8.33 21.01 -8.66 20.02 -9 19 C-8.01 18.67 -7.02 18.34 -6 18 C-5.34 18.66 -4.68 19.32 -4 20 C-3.01 20 -2.02 20 -1 20 C-0.67 16.04 -0.34 12.08 0 8 C0.33 8 0.66 8 1 8 C1.33 10.97 1.66 13.94 2 17 C2.88612202 12.97217261 3.19648329 10.55842619 1.8125 6.625 C0.27052191 3.87432745 0.27052191 3.87432745 -2.1875 3.125 C-2.785625 3.08375 -3.38375 3.0425 -4 3 C-4.33 4.65 -4.66 6.3 -5 8 C-5.33 6.68 -5.66 5.36 -6 4 C-9.0916909 6.52956528 -9.90931332 9.22454612 -11 13 C-11.66 13 -12.32 13 -13 13 C-12.58634898 7.72594947 -11.71026864 4.82270102 -8 1 C-5.11138291 -0.44430855 -3.20352299 -0.37688506 0 0 Z " fill="#573E6A" transform="translate(20,3)"/>
<path d="M0 0 C2.625 0.9375 2.625 0.9375 5 2 C4.01 2.33 3.02 2.66 2 3 C1.67 4.65 1.34 6.3 1 8 C0.67 6.68 0.34 5.36 0 4 C-3.0916909 6.52956528 -3.90931332 9.22454612 -5 13 C-5.66 13 -6.32 13 -7 13 C-6.58634898 7.72594947 -5.71026864 4.82270102 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#604872" transform="translate(14,3)"/>
<path d="M0 0 C4.32001266 0.48000141 6.27322191 1.61503409 9 5 C11.00773481 8.72865037 11.15985203 10.94051788 10 15 C8.44190651 12.66285976 7.29524396 10.58190951 6.125 8.0625 C4.51435831 4.77461113 2.81219672 2.41045433 0 0 Z " fill="#462A5A" transform="translate(16,3)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 4.95 2 9.9 2 15 C1.67 15 1.34 15 1 15 C-0.32558098 10.19476896 -1.36809815 6.03067466 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#AC67D9" transform="translate(18,6)"/>
<path d="M0 0 C3.68754757 0.49831724 5.60490662 1.10067643 8 4 C6.02 4.99 6.02 4.99 4 6 C2.62437146 4.71034824 1.29233607 3.37310707 0 2 C0 1.34 0 0.68 0 0 Z " fill="#7C40A4" transform="translate(4,18)"/>
<path d="M0 0 C0.33 2.31 0.66 4.62 1 7 C-1.03833424 5.7260411 -3.03852126 4.38938077 -5 3 C-5 2.34 -5 1.68 -5 1 C-3 0 -3 0 0 0 Z " fill="#B361E9" transform="translate(12,15)"/>
<path d="M0 0 C3.00617269 3.00617269 2.59585316 5.82381598 3 10 C1.68 10.33 0.36 10.66 -1 11 C-1.33 10.34 -1.66 9.68 -2 9 C-1.34 9 -0.68 9 0 9 C0 6.03 0 3.06 0 0 Z " fill="#7B4B9B" transform="translate(17,13)"/>
<path d="M0 0 C2.475 0.99 2.475 0.99 5 2 C4.01 2.33 3.02 2.66 2 3 C1.67 4.65 1.34 6.3 1 8 C0.67 6.68 0.34 5.36 0 4 C-0.99 4.495 -0.99 4.495 -2 5 C-1.34 3.35 -0.68 1.7 0 0 Z " fill="#583571" transform="translate(14,3)"/>
<path d="M0 0 C2.4294516 3.6441774 2.16179575 5.71241272 2 10 C1.34 9.67 0.68 9.34 0 9 C-0.85056945 5.44307323 -1.16909807 3.50729422 0 0 Z " fill="#8845B4" transform="translate(13,12)"/>
</svg>
      </span>
      <span className="font-bold text-black">FreshFood</span>
    </div>
    <div className="hidden grow items-start lg:flex">
      <ul className="ml-12 inline-flex space-x-8">
        <li>
            <NavLink to='/add' className="text-sm font-semibold text-gray-800 hover:text-gray-900">

            <p>Add items</p>
          </NavLink>
     
        </li>
        <li>
          
            <NavLink to='/list' className="text-sm font-semibold text-gray-800 hover:text-gray-900">
            <p>List Items</p>
            </NavLink>
     
        </li>
        <li>
         
          <NavLink to='/orders' className="text-sm font-semibold text-gray-800 hover:text-gray-900">
            <p>Orders</p>
            </NavLink>
         
        </li>
      </ul>
    </div>
    <div className="hidden lg:block">
      <button
        type="button"
        className="rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Admin
      </button>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

    </>
  );
};

export default Navbar;
