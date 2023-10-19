import React from "react";

//icons
import CircleIcon from "@mui/icons-material/Circle";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <nav className=" bg-black opacity-70 flex justify-between items-center p-[20px] fixed left-0 top-0 w-full z-40">
      <div className=" flex items-center gap-2">
        <CircleIcon className="text-white" />
        <h1 className=" text-white text-[20px] font-semibold">
          Tour Guide Sri Lanka
        </h1>
      </div>

      <div className="flex gap-[25px] items-center">
        <a
          className="text-white no-underline uppercase text-[18px] font-semibold"
          href="#"
        >
          <div className=" gap-[4px] items-center  flex">
            <HomeIcon className="text-white" />
            <span>Home</span>
          </div>
        </a>

        <a
          className="text-white no-underline uppercase text-[18px] font-semibold"
          href="#"
        >
          <div className=" gap-[4px] items-center  flex">
            <GroupsIcon className="text-white" />
            <span>About us</span>
          </div>
        </a>

        <a
          className="text-white no-underline uppercase text-[18px] font-semibold"
          href="#"
        >
          <div className=" gap-[4px] items-center  flex">
            <MailIcon className="text-white" />
            Contact us
          </div>
        </a>

        <a
          className="text-white no-underline uppercase text-[18px] font-semibold"
          href="#"
        >
          <div className="gap-[4px] items-center  flex">
            <PersonIcon className="text-white" />
            Login
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
