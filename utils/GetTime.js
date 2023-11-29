const getHourMinute = (timestamp, timeZone) => {
  const date = new Date(timestamp * 1000);
  // test
  const options = {
    timeZone: timeZone,
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};

const getHours = (timeZone, days) => {
  let hours = [];
  let counter = 0;
  let i = 0;

  const date = new Date();
  const options = {
    timeZone: timeZone,
    hour12: false,
    hour: "numeric",
  };

  i = Number(date.toLocaleString("en-US", options));

  {
    i > 10 ? (i = (i * 10) / 10) : null;
  }
  let arr = [...days[0].hour, ...days[1].hour];

  for (let index = i; index < arr.length; index++) {
    hours.push(arr[index]);
    counter += 1;
    if (counter == 24) {
      break;
    }
  }
  return hours;
};
const getDay = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayOfWeek = days[date.getDay()];
  return dayOfWeek;
};
export { getHourMinute, getHours, getDay };
