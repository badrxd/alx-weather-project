export async function POST(request) {
  try {
    const { ip } = await request.json();
    const res = await fetch(`${process.env.LOCATION_URL}/${ip}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const location = await res.json();
    if (location?.status === "fail") {
      return Response.json({ error: true });
    }
    let city = location.city
    return Response.json({ city: city });
  } catch (error) {
    console.log(error.message);
    return Response.json({ error: true });
  }
}

async function create(data) { }
