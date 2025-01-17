import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-row justify-center  text-center items-center">
      <div>
        <p className="text-center text-4xl ">404</p>

        <Link className="btn btn-secondary" to={"/"}>
          back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
