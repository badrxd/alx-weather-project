"use client";
import { useEffect } from "react";
import Weather from "@/components/Weather";
import City from "@/components/City";
import { useSelector, useDispatch } from "react-redux";
import { GetLocation, resetLocation } from "@/redux/features/location";
import { resetweather } from "@/redux/features/weather";
import Loading from "@/app/loading";

export default function Home() {
  let settings = useSelector((state) => state.settings);
  let weather = useSelector((state) => state.weather);
  let { isLoading, isError, isSucces, location } = useSelector(
    (state) => state.location
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (location == null) {
      dispatch(GetLocation());
    }
  }, [dispatch, location]);

  // useEffect(() => {
  //   if (weather.isError) {
  //     dispatch(resetLocation());
  //     dispatch(resetweather());
  //   }
  // }, []);

  return (
    <main className="flex flex-col items-center h-full justify-center w-full min-h-screen">
      {isError ? (
        <>
          <City />
        </>
      ) : isLoading ? (
        <Loading />
      ) : location !== null ? (
        <>
          <Weather />
        </>
      ) : null}
    </main>
  );
}
