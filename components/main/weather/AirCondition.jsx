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
      <div>
        <h2>AirCondition</h2>
      </div>
      <div className=" mt-4 flex justify-between items-center">
        {/* part1 */}
        <div className="flex flex-col justify-center items-start gap-5">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <span>
                <WiHumidity className="text-4xl" />
              </span>
              <h3>humidity</h3>
            </div>
            <p className="text-2xl font-bold">{day.avghumidity} %</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <span>
                <PiWind className="text-4xl" />
              </span>
              <h3>wind</h3>
            </div>
            <p className="text-2xl font-bold">
              {getByUnit(day, windSpeed, windS)} {windSpeed[windS].name}
            </p>
          </div>
        </div>
        {/* part1 */}
        {/* -------------------------------------------- */}
        {/* part2 */}
        <div className="flex flex-col justify-center items-start gap-5">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <span>
                <SiRainmeter className="text-4xl" />
              </span>
              <h3>chance of Rain</h3>
            </div>
            <p className="text-2xl font-bold">{day.daily_chance_of_rain}%</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <span>
                <PiSunDimFill className="text-4xl" />
              </span>
              <h3>UV Index</h3>
            </div>
            <p className="text-2xl font-bold">{day.uv}</p>
          </div>
        </div>
        {/* part2 */}
      </div>
    </div>
  );
}

export default AirCondition;
