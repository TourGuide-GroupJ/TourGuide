import React from "react";
import { SiGmail } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <footer className="bottom-0 right-0 z-40 flex justify-center w-full p-3 bg-cyan-950 left-o hotel-center">
        <div className="flex flex-col hotels-center gap-3 mx-auto">
          <p className="text-white">
            &copy;2023 Travel Guide Sri Lanka. All right reserved{" "}
          </p>
          <div className="flex gap-5">
            <SiGmail color="white" />
            <SiFacebook color="white" />
            <SiYoutube color="white" />
          </div>
          <div className="text-center">
            <p className="text-white">Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
