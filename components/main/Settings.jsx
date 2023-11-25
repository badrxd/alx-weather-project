import React from "react";
import settings from "@/settings.json";
import { useSelector, useDispatch } from "react-redux";
import { change } from "@/redux/features/settings";

function Settings() {
  const { temp, pres, windS } = useSelector((store) => store.settings);
  const types = ["temp", "pres", "windS"];
  const dispatch = useDispatch();

  const genBtns = (arr, type) => {
    return arr.map((e, i) => {
      return (
        <div key={i}>
          <button
            onClick={() => {
              dispatch(change({ i: i, type: type }));
            }}
          >
            {e.name}
          </button>
        </div>
      );
    });
  };
  return (
    <div>
      <h2>Units</h2>
      <div>
        <h3>Temperature</h3>
        {genBtns(settings.temperature, types[0])}
      </div>
      <div>
        <h3>Pressure</h3>
        {genBtns(settings.pressure, types[1])}
      </div>
      <div>
        <h3>Wind Speed</h3>
        {genBtns(settings.windSpeed, types[2])}
      </div>
    </div>
  );
}

export default Settings;
