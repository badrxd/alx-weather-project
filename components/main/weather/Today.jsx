import React from "react";
import Image from "next/image";
import { getByUnit } from "@/utils/GetByUnits";
import { useSelector } from "react-redux";

function Today({ weather, temperature }) {
  const { location, current } = weather;
  const { temp } = useSelector((store) => store.settings);
  return (
    <div className="rounded-2xl flex justify-between items-start px-10">
      <div className="flex flex-col justify-between items-start h-full">
        <h1 className="text-2xl font-bold flex flex-col justify-center items-start">
          <span>{location.name}</span>
          <span className="text-[#7e8894] text-sm">{location.country}</span>
        </h1>
        <p className="text-4xl font-bold">
          {getByUnit(current, temperature, temp)}
          {temperature[temp].symbole}
        </p>
      </div>
      <div>
        <Image
          src={`http:${current.condition.icon}`}
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export default Today;
