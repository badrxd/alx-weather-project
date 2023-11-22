/*scipt that get the user ip*/

const get_location = async (params) => {
  try {
    const res = await fetch(`${process.env.URL}/api`, {
      // cache: "no-store",
      next: { revalidate: 3600 },
    });
    const { location } = await res.json();
    if (location.status === "fail") {
      return { error: true };
    }

    return location;
  } catch (error) {
    console.log(error.message);
    return { error: true };
  }
};

/*Scipt that get the weather information based on the user ip*/

const get_weather = async (ip) => {
  try {
    const res = await fetch(`${process.env.URL}/api/${ip}`, {
      // cache: "no-store",
      next: { revalidate: 3600 },
    });
    const { weather } = await res.json();
    return weather;
  } catch (error) {
    console.log(error.message);
    return { error: true };
  }
};

export { get_location, get_weather };
