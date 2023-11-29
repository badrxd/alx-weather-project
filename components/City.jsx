import React from "react";
import Search from "@/components/main/Search";
import Image from "next/image";
import logo from "@/public/logo.png";
function City() {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row h-screen w-full sm:p-6 lg:p-0">
      <div className="rounded-2xl lg:h-2/4 max-h-96 flex flex-col justify-center items-center lg:flex-row lg:p-0 border-solid border-2 border-[#202C3C] overflow-hidden">
        <div className="bg-[#202C3C] h-full flex sm:w-full lg:w-1/2 justify-center items-center lg:p-6">
          <Image src={logo} width={300} height={300} alt="logo" />
        </div>
        <div className="h-full flex justify-center items-center p-6">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default City;
