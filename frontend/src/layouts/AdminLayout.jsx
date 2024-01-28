import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <Sidebar />
      </div>
      <div className="justify-center ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
