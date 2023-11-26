// import weather from "@/weather.json";
export async function GET(request, { params: { city } }) {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_KEY}&q=${city}&days=7`;
    const res = await fetch(`${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const weather = await res.json();
    return Response.json({ ...weather });
  } catch (error) {
    console.log(error.message);
    return Response.json({ error: true });
  }
}
