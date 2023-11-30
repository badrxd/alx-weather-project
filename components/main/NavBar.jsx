import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSettings } from "@/redux/features/settings";
import Image from "next/image";
import { FaCloudSunRain } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

import logo from "@/public/logo.png";
function NavBar() {
  const { page } = useSelector((store) => store.settings);
  const dispatch = useDispatch();

  const ChangeSection = (i) => {
    dispatch(changeSettings({ i: i, type: "page" }));
  };

  return (
    <div className="lg:w-auto bg-[#202C3C] lg:min-h-[775px] lg:rounded-2xl p-2 flex lg:flex-col lg:justify-start sm:justify-center sm:h-14 sm:flex-row  sm:bg-[#202C3C] sm:drop-shadow-3xl lg:static sm:rounded-none sm:fixed sm:bottom-0 sm:z-50 sm:right-0 sm:left-0 items-center">
      <div className="sm:hidden lg:block">
        <Image src={logo} width={70} height={70} alt="logo image" />
      </div>
      <ul className="my-12 flex lg:flex-col sm:flex-row sm:gap-12 lg:gap-7">
        <li className={page == 0 ? "text-white" : null}>
          <button
            className="flex flex-col justify-center items-center text-inherit"
            onClick={() => {
              ChangeSection(0);
            }}
          >
            <FaCloudSunRain className="text-2xl" />
            <span className="sm:hidden lg:block">Weather</span>
          </button>
        </li>
        <li className={page == 1 ? "text-white" : null}>
          <button
            className="flex flex-col justify-center items-center text-inherit"
            onClick={() => {
              ChangeSection(1);
            }}
          >
            <span>
              <VscSettings className="text-2xl" />
            </span>
            <span className="sm:hidden lg:block">Settings</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
