import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Home/HomePage";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import AddProduct from "../Pages/AddProduct";
import Profile from "../Dasboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/Add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
