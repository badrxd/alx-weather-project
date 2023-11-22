"use server";
import React from "react";
import Image from "next/image";
import settings from "../settings.json";
import { getByUnit } from "@/utils/GetByUnits";

async function Weather({ weather, sett_idx }) {
  const { location, current, forecast } = await weather;
  const { temp, pres, windS } = await sett_idx;
  const { temperature } = await settings;

  return (
    <section>
      <div>Search</div>
      <div>
        <div>
          <div>
            <p>{location.name}</p>
            <p>
              {await getByUnit(current, temperature, temp)}
              {temperature[temp].symbole}
            </p>
            <Image
              src={`https:${current.condition.icon}`}
              width={64}
              height={64}
              alt="Picture of the author"
            />
          </div>
          <div>
            Todays forcast
            <div>
              {forecast.forecastday[0].hour.map((e, i) => {
                return (
                  <div key={i}>
                    <p>{e.time}</p>
                    <Image
                      src={`https:${e.condition.icon}`}
                      width={64}
                      height={64}
                      alt="Picture of the author"
                    />
                    <p>{e.temp_c}</p>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            Air condition
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div>7days forcast</div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
