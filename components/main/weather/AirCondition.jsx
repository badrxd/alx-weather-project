import React from "react";
import { PiWind, PiSunDimFill } from "react-icons/pi";
import { SiRainmeter } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { getByUnit } from "@/utils/GetByUnits";
import { useSelector } from "react-redux";

function AirCondition({ day, windSpeed }) {
  const { windS } = useSelector((store) => store.settings);
  return (
    <div className="bg-[#202C3C] rounded-2xl p-4 px-10">
      <div className="flex justify-between items-center">
        <h2 className="uppercase">Air Condition</h2>
        <button className=" bg-sky-500 text-sm hover:bg-sky-700 py-1 px-4 rounded-full">
          See More
        </button>
      </div>
      <div className=" mt-4 flex flex-col justify-center items-center gap-3">
        {/* part1 */}
        <div className="flex justify-start items-start gap-5 w-full">
          <div className="flex justify-start items-start gap-2 w-1/2">
            <span>
              <SiRainmeter className="text-2xl" />
            </span>
            <div className="flex flex-col justify-center items-start gap-2">
              <h3>Chance of Rain</h3>
              <p className="text-2xl font-bold text-[#BDC5D1]">
                {day.daily_chance_of_rain}%
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2 w-1/2">
            <span>
              <PiWind className="text-2xl" />
            </span>
            <div className="flex flex-col justify-center items-start gap-2">
              <h3>Wind</h3>
              <p className="text-2xl font-bold text-[#BDC5D1]">
                {getByUnit(day, windSpeed, windS)} {windSpeed[windS].name}
              </p>
            </div>
          </div>
        </div>
        {/* part1 */}
        {/* -------------------------------------------- */}
        {/* part2 */}
        <div className="flex  justify-center items-start gap-5 w-full">
          <div className="flex justify-start items-start gap-2 w-1/2">
            <span>
              <WiHumidity className="text-2xl" />
            </span>
            <div className="flex flex-col justify-center items-start gap-2">
              <h3>Humidity</h3>
              <p className="text-2xl font-bold text-[#BDC5D1]">
                {day.avghumidity}%
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2 w-1/2">
            <span>
              <PiSunDimFill className="text-2xl" />
            </span>
            <div className="flex flex-col justify-center items-start gap-2">
              <h3>UV Index</h3>
              <p className="text-2xl font-bold text-[#BDC5D1]">{day.uv}</p>
            </div>
          </div>
        </div>
        {/* part2 */}
      </div>
    </div>
  );
}

export default AirCondition;
