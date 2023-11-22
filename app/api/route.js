export async function GET(request) {
  try {
    const res = await fetch(`${process.env.LOCATION_URL}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });
    const location = await res.json();
    return Response.json({ location });
  } catch (error) {
    return Response.json({ error: true });
  }
}
