import React from "react";
import Today from "./weather/Today";
import DaysForecast from "./weather/DaysForecast";
import TodayForecast from "./weather/TodayForecast";
import AirCondition from "./weather/AirCondition";
function Main() {
  return (
    <div>
      <div>
        <Today />
      </div>
      <div>
        <TodayForecast />
        <AirCondition />
        <DaysForecast />
      </div>
    </div>
  );
}

export default Main;
