import React, { useEffect } from "react";
import Today from "./weather/Today";
import DaysForecast from "./weather/DaysForecast";
import TodayForecast from "./weather/TodayForecast";
import AirCondition from "./weather/AirCondition";
import settings from "@/settings.json";
import { useSelector } from "react-redux";

function Main() {
  const { temperature, windSpeed } = settings;
  const { weather } = useSelector((store) => store.weather);
  useEffect(() => {}, [weather]);
  return (
    <div className="flex gap-5">
      <div className="w-4/6 rounded-2xl p-6 flex flex-col gap-5">
        <Today weather={weather} temperature={temperature} />
        <TodayForecast temperature={temperature} weather={weather} />
        <AirCondition
          day={weather.forecast.forecastday[0].day}
          windSpeed={windSpeed}
        />
      </div>
      <div className=" bg-[#202C3C] w-2/6 rounded-2xl p-6">
        <DaysForecast
          temperature={temperature}
          forecastday={weather.forecast.forecastday}
        />
      </div>
    </div>
  );
}

export default Main;
