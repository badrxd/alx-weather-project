import React, { useEffect } from "react";
import settings from "@/settings.json";
import { useSelector, useDispatch } from "react-redux";
import { changeSettings } from "@/redux/features/settings";

function Settings() {
  const { temp, pres, windS } = useSelector((store) => store.settings);
  const types = ["temp", "pres", "windS"];
  const dispatch = useDispatch();
  const styleCss =
    "hover:bg-[#202C3C] active:bg-[#35455e] text-white font-bold py-2 px-4 rounded flex justify-center w-full items-center";
  const color = "bg-[#35455e] ";

  const genBtns = (arr, type, index) => {
    return arr.map((e, i) => {
      return (
        <div key={i} className="w-1/2">
          <button
            className={`${i === index ? `${color}${styleCss}` : styleCss}`}
            onClick={() => {
              dispatch(changeSettings({ i: i, type: type }));
            }}
          >
            {e.name}
          </button>
        </div>
      );
    });
  };
  useEffect(() => {}, [temp, pres, windS]);
  return (
    <div className="flex flex-col justify-center gap-5">
      <h2 className="font-bold text-2xl text-[#fff] p-6">Units</h2>
      <div className="bg-[#202C3C] rounded-2xl flex flex-col justify-center items-start p-6">
        {/* ------------------------------------------------------------------------------------------ */}
        <div className="w-full">
          <h3 className="uppercase my-2">Temperature</h3>
          <dev className="bg-[#0B131F] flex justify-center items-center w-full gap-x-5 rounded-xl p-2">
            {genBtns(settings.temperature, types[0], temp)}
          </dev>
        </div>
        {/* ------------------------------------------------------------------------------------------ */}
        <div className="w-full">
          <h3 className="uppercase my-2">Pressure</h3>
          <div className="bg-[#0B131F] flex justify-center items-center w-full gap-x-5 rounded-xl p-2">
            {genBtns(settings.pressure, types[1], pres)}
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------ */}
        <div className="w-full">
          <h3 className="uppercase my-2">Wind Speed</h3>
          <div className="bg-[#0B131F] flex justify-center items-center w-full gap-x-5 rounded-xl p-2">
            {genBtns(settings.windSpeed, types[2], windS)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
