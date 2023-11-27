import React from "react";
import { getByUnit } from "@/utils/GetByUnits";
import { getDay } from "@/utils/GetTime";
import { useSelector } from "react-redux";
import Image from "next/image";

function DaysForecast({ temperature, forecastday }) {
  const { temp } = useSelector((store) => store.settings);
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h2>7-days Forecast</h2>
      </div>
      {forecastday.map((e, i) => {
        return (
          <div
            className="flex justify-between border-b border-[#0B131F] mb-2"
            key={i}
          >
            <h3 className="w-1/4">{i == 0 ? "Today" : getDay(e.date_epoch)}</h3>
            <div className="flex justify-center items-center w-2/4">
              <Image
                src={`http:${e.day.condition.icon}`}
                width={50}
                height={50}
                alt={e.day.condition.text}
              />
              <p>{e.day.condition.text}</p>
            </div>
            <p className="w-1/4">
              {getByUnit(e.day, temperature, temp, 1)}
              <span>/{getByUnit(e.day, temperature, temp, 2)}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DaysForecast;
