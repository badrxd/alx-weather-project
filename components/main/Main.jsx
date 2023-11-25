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
    <div>
      <div>
        <Today />
        <TodayForecast temperature={temperature} weather={weather} />
        <AirCondition
          day={weather.forecast.forecastday[0].day}
          windSpeed={windSpeed}
        />
      </div>
      <div>
        <DaysForecast
          temperature={temperature}
          forecastday={weather.forecast.forecastday}
        />
      </div>
    </div>
  );
}

export default Main;
