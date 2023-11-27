import React from "react";
import { useDispatch } from "react-redux";
import { changeSettings } from "@/redux/features/settings";
import Image from "next/image";
import { FaCloudSunRain } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

import logo from "@/public/logo.png";
function NavBar() {
  const dispatch = useDispatch();

  const ChangeSection = (i) => {
    dispatch(changeSettings({ i: i, type: "page" }));
  };

  return (
    <div className="bg-[#202C3C] w-1/12 h-screen rounded-2xl p-2 flex flex-col justify-start items-center">
      <div>
        <Image src={logo} width={70} height={70} alt="logo image" />
      </div>
      <ul className="my-12 flex flex-col gap-7">
        <li>
          <button
            className="flex flex-col justify-center items-center"
            onClick={() => {
              ChangeSection(0);
            }}
          >
            <FaCloudSunRain className="text-2xl" />
            Weather
          </button>
        </li>
        <li>
          <button
            className="flex flex-col justify-center items-center"
            onClick={() => {
              ChangeSection(1);
            }}
          >
            <span>
              <VscSettings className="text-2xl" />
            </span>
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
