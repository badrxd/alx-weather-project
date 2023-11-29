import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "@/redux/features/location";
import { changeSettings } from "@/redux/features/settings";

//
function Search() {
  const [city, SetCity] = useState("");
  const dispatch = useDispatch();

  const submet = (e) => {
    e.preventDefault();
    if (city.length > 0) {
      dispatch(change(city));
      dispatch(changeSettings({ i: 0, type: "page" }));
    }
  };
  return (
    <div className="bg-[#202C3C] rounded-2xl">
      <form
        className="flex justify-start items-center"
        onSubmit={(e) => {
          submet(e);
        }}
      >
        <input
          className="p-3 w-full bg-[#202C3C] rounded-2xl focus:outline-none"
          type="text"
          placeholder="Enter Your City"
          onChange={(e) => {
            SetCity(e.target.value);
          }}
        />
        <button
          className="mx-3 bg-sky-500 hover:bg-sky-700 py-1 px-4 rounded-full"
          type="submet"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
