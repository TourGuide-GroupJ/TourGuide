import React from "react";

import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black opacity-80 fixed top-0 left-0 right-0 w-full p-4 py-8 z-40">
      <div className="flex items-center gap-1">
        <CircleIcon className="text-white" />
        <span className=" text-white text-[18px] uppercase font-semibold w-max">
          Travel Guide Sri Lanka
        </span>
      </div>
      <div className="md:justify-end justify-start md:static absolute md:min-h-fit bg-black opacity-90 min-h-[35vh] left-0 top-[60px] w-full flex items-center px-5 z-20">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-4 gap-4">
          <li>
            <Link
              className="text-white  hover:text-gray-500 no-underline uppercase text-[16px] font-semibold"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white  hover:text-gray-500 no-underline uppercase text-[16px] font-semibold"
              to="/contactus"
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              className="text-white  hover:text-gray-500 no-underline uppercase text-[16px] font-semibold"
              to="/aboutus"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="text-white  hover:text-gray-500 no-underline uppercase text-[16px] font-semibold"
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
