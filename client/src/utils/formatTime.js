export const createDateTimeObj = (dateString) => {
  const date = new Date(dateString);

  return {
    shortMonth: date.toLocaleDateString("en-US", { month: "short" }),
    dayOfMonth: date.toLocaleDateString("en-US", { day: "numeric" }),
    startHour: date.toLocaleTimeString("en-US", { hour: "numeric" }),
    endHour: "",
  };
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });

  return `${formattedDate}, ${formattedTime}`;
};
