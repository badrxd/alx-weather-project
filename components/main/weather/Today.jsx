import React from "react";
import Image from "next/image";
import { getByUnit } from "@/utils/GetByUnits";
import { useSelector } from "react-redux";

function Today({ weather, temperature }) {
  const { location, current } = weather;
  const { temp } = useSelector((store) => store.settings);
  return (
    <div className="rounded-2xl flex justify-between items-start px-10 py-6 gap-5">
      <div className="flex flex-col justify-between items-start lg:h-full sm:h-36">
        <h1 className="text-2xl font-bold flex flex-col justify-center items-start gap-2">
          <span className="text-[#ffffff]">{location.name}</span>
          <span className="text-[#7e8894] text-sm">{location.country}</span>
        </h1>
        <p className="text-5xl text-[#ffffff] font-bold">
          {getByUnit(current, temperature, temp)}
          {temperature[temp].symbole}
        </p>
      </div>
      <div>
        <Image
          src={`/images/${current.is_day ? "day" : "night"}/${
            current.condition.text
          }.png`}
          // src={`http:${current.condition.icon}`}
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export default Today;
