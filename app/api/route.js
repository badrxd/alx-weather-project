export async function POST(request) {
  try {
    let ip = "";
    ip = await request.json();
    const res = await fetch(`${process.env.LOCATION_URL}/${ip}`, {
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

async function create(data) {}
