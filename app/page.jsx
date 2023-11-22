"use server";
import { get_location, get_weather } from "@/utils/SetUpWeather";
import Weather from "@/components/Weather";
import City from "@/components/City";
import NavBar from "@/components/NavBar";

export default async function Home() {
  let weather = null;
  let sett_idx = { temp: 0, pres: 0, windS: 0 };
  const location = await get_location();
  const city = `${location.lat},${location.lon}`;

  weather = !location?.error ? await get_weather(city) : null;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {location?.error ? (
        <City />
      ) : (
        <>
          <NavBar />
          <Weather weather={weather} sett_idx={sett_idx} />
        </>
      )}
    </main>
  );
}
