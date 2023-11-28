import React from "react";
import { getByUnit } from "@/utils/GetByUnits";
import { getDay } from "@/utils/GetTime";
import { useSelector } from "react-redux";
import Image from "next/image";

function DaysForecast({ temperature, forecastday }) {
  const { temp } = useSelector((store) => store.settings);
  return (
    <div className="h-full flex flex-col justify-between lg:gap-4 sm:gap-6">
      <div>
        <h2 className="uppercase">7-days Forecast</h2>
      </div>
      {forecastday.map((e, i) => {
        return (
          <>
            <div className="flex justify-between items-center gap-2" key={i}>
              <h3 className="w-1/4">
                {i == 0 ? "Today" : getDay(e.date_epoch)}
              </h3>
              <div className="w-1/4">
                <Image
                  src={`/images/day/${e.day.condition.text}.png`}
                  width={30}
                  height={30}
                  alt={e.day.condition.text}
                />
              </div>
              <div className="w-1/4 text-[#BDC5D1] font-semibold">
                <p>{e.day.condition.text}</p>
              </div>
              <p className="w-1/4">
                <span className="text-[#BDC5D1] font-semibold">
                  {parseInt(getByUnit(e.day, temperature, temp, 1))}
                </span>
                <span>/{parseInt(getByUnit(e.day, temperature, temp, 2))}</span>
              </p>
            </div>
            {forecastday.length != i + 1 ? (
              <hr className=" border-[#7e8894]" />
            ) : null}
          </>
        );
      })}
    </div>
  );
}

export default DaysForecast;
