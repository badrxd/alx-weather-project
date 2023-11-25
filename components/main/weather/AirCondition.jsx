import React from "react";
import { PiWind, PiSunDimFill } from "react-icons/pi";
import { SiRainmeter } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { getByUnit } from "@/utils/GetByUnits";
import { useSelector } from "react-redux";

function AirCondition({ day, windSpeed }) {
  const { windS } = useSelector((store) => store.settings);
  return (
    <div>
      <div>
        <h2>AirCondition</h2>
      </div>
      <div>
        <div>
          <div>
            <span>
              <WiHumidity />
            </span>
            <h3>humidity</h3>
          </div>
          <p>{day.avghumidity} %</p>
        </div>
        <div>
          <div>
            <span>
              <PiWind />
            </span>
            <h3>wind</h3>
          </div>
          <p>
            {getByUnit(day, windSpeed, windS)} {windSpeed[windS].name}
          </p>
        </div>
        <div>
          <div>
            <span>
              <SiRainmeter />
            </span>
            <h3>chance of Rain</h3>
          </div>
          <p>{day.daily_chance_of_rain}</p>
        </div>
        <div>
          <div>
            <span>
              <PiSunDimFill />
            </span>
            <h3>UV Index</h3>
          </div>
          <p>{day.uv}</p>
        </div>
      </div>
    </div>
  );
}

export default AirCondition;
