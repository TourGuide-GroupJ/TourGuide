import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfIcon() {
  const sign_out = () =>{
    sessionStorage.removeItem("jwtToken");
    window.location.href = "/";
  }

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div className="inline-flex">
          <Link
            className="text-white  hover:text-gray-500 no-underline uppercase text-[16px] font-semibold"
            to="/GuideProf"
          >
            <AccountCircleIcon />
          </Link>
          <Menu.Button className="rounded-sm">
            <ChevronDownIcon
              className="w-5 h-5 text-gray-100 hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    License Update
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    onClick={sign_out}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
