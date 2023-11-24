import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "@/redux/features/location";

function Search() {
  const [city, SetCity] = useState();
  const dispatch = useDispatch();

  const submet = (e) => {
    e.preventDefault();
    dispatch(change(city));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submet(e);
        }}
      >
        <label htmlFor="">city</label>
        <input
          type="text"
          onChange={(e) => {
            SetCity(e.target.value);
            console.log(city);
          }}
        />
        <button type="submet">Submet</button>
      </form>
    </div>
  );
}

export default Search;
