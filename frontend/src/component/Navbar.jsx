import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//web site logo icon
import CircleIcon from "@mui/icons-material/Circle";

const Navbar = () => {
  const [hasToken, setHasToken] = useState(false);
  const checkToken = () => {
    const token = sessionStorage.getItem("jwtToken");
    if (!token) {
      return setHasToken(false);
    } else {
      return setHasToken(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between w-full p-4 py-8 bg-black opacity-80">
      {/* logo and name */}
      <div className="flex gap-1 item-center">
        <CircleIcon className="text-white" />
        <span className=" text-white text-[18px] uppercase font-semibold w-max">
          Travel Guide Sri Lanka
        </span>
      </div>

      {/* menu items */}
      <div className="md:justify-end justify-start md:static absolute md:min-h-fit bg-black opacity-90 min-h-[30vh] left-0 top-[80px] w-full flex items-center px-5 z-20">
        <ul className="flex flex-col gap-4 md:flex-row md:item-center">
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
            {hasToken ? (
              <Link
                className="text-white  hover:text-gray-500 no-underline uppercase text-[16px] font-semibold"
                to="/login"
              >
                Logout
              </Link>
            ) : (
              <Link
                className="text-white  hover:text-gray-500 no-underline uppercase text-[16px] font-semibold"
                to="/login"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
