"use client";
import { useEffect } from "react";
import Weather from "@/components/Weather";
import City from "@/components/City";
import { useSelector, useDispatch } from "react-redux";
import { GetLocation } from "@/redux/features/location";

export default function Home() {
  let settings = useSelector((state) => state.settings);
  let { isLoading, isError, isSucces, location } = useSelector(
    (state) => state.location
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (location === "") {
      dispatch(GetLocation());
    }
  }, [dispatch, location]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isError ? (
        <>
          <City />
        </>
      ) : isLoading ? (
        <>Loading...</>
      ) : location !== "" ? (
        <>
          <Weather />
        </>
      ) : null}
    </main>
  );
}
