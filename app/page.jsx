"use server";
import { get_location, get_weather } from "@/utils/SetUpWeather";
import Weather from "@/components/Weather";
import City from "@/components/City";
import NavBar from "@/components/NavBar";

export default async function Home() {
  let weather = null;
  const location = await get_location();
  const ip = `${location.lat},${location.lon}`;
  weather = !location?.error ? await get_weather(ip) : null;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {location?.error ? (
        <City />
      ) : (
        <>
          <NavBar />
          <Weather weather={weather} />
        </>
      )}
    </main>
  );
}
