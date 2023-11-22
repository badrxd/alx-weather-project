export async function GET(request) {
  try {
    const res = await fetch(`${process.env.LOCATION_URL}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const location = await res.json();
    return Response.json({ location });
  } catch (error) {
    console.log(error.message);
    return Response.json({ error: true });
  }
}
