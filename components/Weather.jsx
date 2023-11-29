import React, { useEffect } from "react";
import Image from "next/image";
import settings from "../settings.json";
import NavBar from "@/components/main/NavBar";
import Search from "@/components/main/Search";
import Settings from "@/components/main/Settings";
import Main from "@/components/main/Main";
import { useSelector, useDispatch } from "react-redux";
import { GetWeather } from "@/redux/features/weather";
import Loading from "@/app/loading";
import Error from "@/components/main/Error";

function Weather() {
  let { location } = useSelector((state) => state.location);
  let { page } = useSelector((state) => state.settings);
  let { isLoading, isError, isSucces, weather } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetWeather(location));
  }, [dispatch, location]);
  return (
    <div className="flex sm:flex-col lg:flex-row justify-between w-full min-h-[756px] px-3 items-start sm:relative gap-5 mt-5 lg:mb-5">
      <NavBar />
      <div className="flex flex-col gap-5 w-full lg:w-11/12">
        <Search />
        {isError ? (
          page == 0 ? (
            <Error />
          ) : null
        ) : isLoading ? (
          <Loading />
        ) : weather !== null ? (
          <>{page == 0 ? <Main /> : null}</>
        ) : null}
        {page == 1 ? <Settings /> : null}
      </div>
    </div>
  );
}

export default Weather;
