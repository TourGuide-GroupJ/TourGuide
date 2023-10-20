import React from "react";

import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black opacity-80 fixed top-0 left-0 right-0 w-full p-2.5 z-40">
      <div className="flex items-center gap-4">
        <CircleIcon className="text-white" />
        <span className=" text-white text-lg font-semibold w-max">
          Tour Guide Sri Lanka
        </span>
      </div>
      <div className="md:justify-end justify-start md:static absolute md:min-h-fit bg-black opacity-80 min-h-[35vh] left-0 top-[40px] w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-[10px]">
          <li>
            <Link
              className="text-white  hover:text-gray-500 no-underline uppercase text-[18px] font-semibold"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white  hover:text-gray-500 no-underline uppercase text-[18px] font-semibold"
              to="/"
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              className="text-white  hover:text-gray-500 no-underline uppercase text-[18px] font-semibold"
              to="/aboutus"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="text-white  hover:text-gray-500 no-underline uppercase text-[18px] font-semibold"
              href="#"
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
