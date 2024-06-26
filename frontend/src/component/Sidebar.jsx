import React from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <span className="flex items-center p-2 text-white rounded-lg ms-3">
            Dashboard
          </span>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin/adminGuide"
                className="flex items-center p-2 mt-3.5 text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <span className="flex-1 ms-3">Guide</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/adminHotel"
                className="flex items-center p-2 mt-3.5 text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3">Hotel</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 mt-3.5 text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3">Equipment</span>
              </a>
            </li>
            <li>
              <Link
                to="/admin/adminResponse"
                className="flex items-center p-2 mt-3.5 text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3">Response</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
