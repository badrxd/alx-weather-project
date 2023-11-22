export async function GET(request, { params: { param } }) {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_KEY}&q=${param}&days=7`;
    const res = await fetch(`${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });
    const weather = await res.json();
    return Response.json({ weather });
  } catch (error) {
    console.log(error.message);
    return Response.json({ error: true });
  }
}
