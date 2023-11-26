import React from "react";
import Image from "next/image";
import { getByUnit } from "@/utils/GetByUnits";
import { useSelector } from "react-redux";

function Today({ weather, temperature }) {
  const { location, current } = weather;
  const { temp } = useSelector((store) => store.settings);
  return (
    <div className="bg-[#202C3C] rounded-2xl p-6">
      <div>
        <h1>{location.name}</h1>
        <p>{current.temp_c}</p>
        <p>
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
