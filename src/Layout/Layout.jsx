import React from "react";
import NavBar from "../Home/NavBar";
import { Outlet } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Footer from "../Home/Footer";

const Layout = () => {
  return (
    <div className="bg-base-300">
      <NavBar></NavBar>
      <div className="min-h-screen-minus-240 pt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
