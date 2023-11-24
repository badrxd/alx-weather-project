import React, { useEffect } from "react";
import Image from "next/image";
import settings from "../settings.json";
import NavBar from "@/components/main/NavBar";
import Search from "@/components/main/Search";
import Main from "@/components/main/Main";
import { useSelector, useDispatch } from "react-redux";
import { GetWeather } from "@/redux/features/weather";

function Weather() {
  let { location } = useSelector((state) => state.location);
  let { isLoading, isError, isSucces, weather } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetWeather(location));
  }, [dispatch, location]);

  return (
    <>
      <NavBar />
      <div>
        <Search />
        {isError ? (
          ""
        ) : isLoading ? (
          "Loading..."
        ) : weather !== null ? (
          <>
            {location}
            <Main />
          </>
        ) : null}
      </div>
    </>
  );
}

export default Weather;
