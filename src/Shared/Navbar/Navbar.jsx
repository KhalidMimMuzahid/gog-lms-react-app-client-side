import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/gog-full-logo.png";
import logout from "../../assets/svg/logout.svg";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/UserProvider/UserProvider";
import { toast } from "react-hot-toast";

import { BsBookmarks, BsQuestionCircle, BsMegaphone } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const [currentPath, setCurrrentPath] = useState("");
  const { user, logOut } = useContext(AuthContext);
  useLocation();
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrrentPath(window.location.pathname);
    };
    return handleLocationChange();
  });
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className="bg-white  shadow-md border-gray-900 dark:bg-green-900 rounded-lg">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </Link>

        <div
          className={`${
            user?.email ? "flex" : "hidden"
          }  items-center md:order-2`}
        >
          {/* {user?.email && ( */}

          <div className="relative">
            <button
              type="button"
              className={`${
                user?.email ? "flex" : "hidden"
              } mr-3 text-sm bg-gray-800 rounded-full md:mr-0`}
              id="user-profile-header"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://i.ibb.co/jkbWws1/blank-profile-picture-973460-340.png"
                }
                alt="userphoto"
              />
            </button>
            {isOpen && (
              <div
                ref={dropdownRef}
                className="origin-top-right absolute z-[100000000] right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="px-2 py-4 flex items-center justify-around gap-2 ">
                  <div className="">
                    <img
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://i.ibb.co/jkbWws1/blank-profile-picture-973460-340.png"
                      }
                      alt=""
                      className="rounded-full border-4 border-green-500 w-[75px] h-[75px]"
                    />
                  </div>
                  <div className="flex grow flex-col justify-between  ">
                    <h4 className="text-xl ml-2 font-poppins">{user?.name}</h4>
                    <Link to="/profile/my-profile" className="w-full grow ">
                      <button
                        type="button"
                        className="text-white w-full  font-poppins bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-400 "
                      >
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
                <ul
                  className="py-2  font-poppins mx-4 gap-4 items-center justify-center"
                  aria-labelledby="user-menu-button"
                >
                  <li className=" flex justify-center">
                    <button
                      onClick={handleLogOut}
                      className="block  rounded-lg border-gray-600 shadow-md  w-full  text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <div className="flex px-4 py-2 gap-2  items-center justify-start ">
                        <img src={logout} alt="" />
                        <span>Sign Out</span>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* // )} */}
          {/* <!-- Dropdown menu --> */}

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className="items-center grow   justify-end hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="font-poppins">
              <Link
                to="/announcement"
                className="text-black p-1 block bg-white"
              >
                <BsMegaphone
                  className={`w-[25px] h-[25px] hover:text-[#4BA25D] duration-200 ${
                    currentPath.startsWith("/announcement") && "text-[#4BA25D]"
                  }`}
                />
                {/* <img src={anouncement} alt="" className="w-[25px]  h-[25px]" /> */}
              </Link>
            </li>
            <li className="font-poppins">
              <Link to="/bookmark" className="text-black py-1 block bg-white">
                <BsBookmarks
                  className={`w-[25px]  h-[25px] hover:text-[#4BA25D] duration-200 ${
                    currentPath.startsWith("/bookmark") && "text-[#4BA25D]"
                  }`}
                />
                {/* <img src={bookmark} alt="" className="w-[25px]  h-[25px]" /> */}
              </Link>
            </li>
            <li className="font-poppins">
              <Link
                to="/help"
                className="text-black py-1 block md:mr-10 mr-0 bg-white"
              >
                <BsQuestionCircle
                  className={`w-[25px] h-[25px] hover:text-[#4BA25D] duration-200 ${
                    currentPath.startsWith("/help") && "text-[#4BA25D]"
                  }`}
                />
                {/* <img src={help} alt="" className="w-[25px]  h-[25px]" /> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
