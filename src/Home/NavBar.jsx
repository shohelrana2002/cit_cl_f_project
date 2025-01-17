import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const nav = [
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>,

    <li>
      <NavLink to={"/Add-Product"}>Add-Product</NavLink>
    </li>,
    <li>
      <NavLink to={"/contact"}>Contact</NavLink>
    </li>,
    <li>
      <NavLink to={"/about"}>About</NavLink>
    </li>,
  ];
  return (
    <div className="w-full h-full ">
      <div className="fixed bg-base-300 shadow-lg navbar w-full z-40 h-8 mx-auto border">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            Free Shop
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
              <li>
                <a>LogOut</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
