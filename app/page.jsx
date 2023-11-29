"use client";
import { useEffect } from "react";
import Weather from "@/components/Weather";
import City from "@/components/City";
import { useSelector, useDispatch } from "react-redux";
import { GetLocation } from "@/redux/features/location";
import { GetIp } from "@/redux/features/ip";
import Loading from "@/app/loading";

export default function Home() {
  let settings = useSelector((state) => state.settings);
  let weather = useSelector((state) => state.weather);
  let ip = useSelector((state) => state.ip);

  let { isLoading, isError, isSucces, location } = useSelector(
    (state) => state.location
  );
  const dispatch = useDispatch();

  const first = async () => {
    await dispatch(GetIp());
  };
  useEffect(() => {
    if (location == null && ip.ip !== null) {
      dispatch(GetLocation(ip.ip));
    }
  }, [dispatch, location, ip.ip]);

  useEffect(() => {
    first();
  }, []);

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
