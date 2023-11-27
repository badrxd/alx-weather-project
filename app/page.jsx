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
    if (location == null) {
      dispatch(GetLocation());
    }
  }, [dispatch, location]);

  return (
    <main className="flex flex-col items-center h-screen justify-center w-full min-h-screen p-5 ">
      {isError ? (
        <>
          <City />
        </>
      ) : isLoading ? (
        <>Loading...</>
      ) : location !== null ? (
        <>
          <Weather />
        </>
      ) : null}
    </main>
  );
}
