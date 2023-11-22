"use server";
import React from "react";
import Image from "next/image";

async function Weather(weather) {
  const Weather = await weather.weather;
  const { location, current, forecast } = await Weather;
  console.log(Weather);
  return (
    <section>
      <div>Search</div>
      <div>
        <div>
          <div>
            <p>{location.name}</p>
            <p>{current.temp_c}</p>
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
            <div></div>
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
