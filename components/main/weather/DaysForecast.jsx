import React from "react";
import { getByUnit } from "@/utils/GetByUnits";
import { getDay } from "@/utils/GetTime";
import { useSelector } from "react-redux";
import Image from "next/image";

function DaysForecast({ temperature, forecastday }) {
  const { temp } = useSelector((store) => store.settings);
  return (
    <div>
      <div>
        <h2>7-days Forecast</h2>
      </div>
      <div>
        {forecastday.map((e, i) => {
          return (
            <div key={i}>
              <h3>{i == 0 ? "Today" : getDay(e.date_epoch)}</h3>
              <div>
                <Image
                  src={`http:${e.day.condition.icon}`}
                  width={70}
                  height={70}
                  alt={e.day.condition.text}
                />
                <p>{e.day.condition.text}</p>
              </div>
              <p>
                {getByUnit(e.day, temperature, temp, 1)}
                <span>/{getByUnit(e.day, temperature, temp, 2)}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DaysForecast;
