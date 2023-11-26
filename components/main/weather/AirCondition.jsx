import React from "react";
import { PiWind, PiSunDimFill } from "react-icons/pi";
import { SiRainmeter } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { getByUnit } from "@/utils/GetByUnits";
import { useSelector } from "react-redux";

function AirCondition({ day, windSpeed }) {
  const { windS } = useSelector((store) => store.settings);
  return (
    <div className="bg-[#202C3C] rounded-2xl p-6">
      <div>
        <h2>AirCondition</h2>
      </div>
      <div className="flex justify-between items-center">
        {/* part1 */}
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <span>
                <WiHumidity />
              </span>
              <h3>humidity</h3>
            </div>
            <p>{day.avghumidity} %</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <span>
                <PiWind />
              </span>
              <h3>wind</h3>
            </div>
            <p>
              {getByUnit(day, windSpeed, windS)} {windSpeed[windS].name}
            </p>
          </div>
        </div>
        {/* part1 */}
        {/* -------------------------------------------- */}
        {/* part2 */}
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <span>
                <SiRainmeter />
              </span>
              <h3>chance of Rain</h3>
            </div>
            <p>{day.daily_chance_of_rain}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <span>
                <PiSunDimFill />
              </span>
              <h3>UV Index</h3>
            </div>
            <p>{day.uv}</p>
          </div>
        </div>
        {/* part2 */}
      </div>
    </div>
  );
}

export default AirCondition;
