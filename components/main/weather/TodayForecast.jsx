import Image from "next/image";
import { getByUnit } from "@/utils/GetByUnits";
import { getHourMinute, getHours } from "@/utils/GetTime";
import { useSelector } from "react-redux";

function TodayForecast({ temperature, weather }) {
  const { temp } = useSelector((store) => store.settings);
  const { location, forecast } = weather;
  let hours = getHours(location.tz_id, forecast.forecastday);
  return (
    <div className="bg-[#202C3C] rounded-2xl p-4 px-10">
      <h2>TodayForecast</h2>
      <div className="flex mt-4 justify-between items-center">
        {hours.map((e, i) => {
          return (
            <div className=" border-r pr-3 border-[#6e7681]" key={i}>
              <h3>{getHourMinute(e.time_epoch, location.tz_id)}</h3>
              <div>
                <Image
                  src={`http:${e.condition.icon}`}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
              </div>
              <p>
                {getByUnit(e, temperature, temp)}
                {temperature[temp].symbole}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodayForecast;
