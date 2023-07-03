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

  return `${formattedDate}`;
};

export const formatTimeRange = (startTime, endTime) => {
  startTime = new Date(startTime);
  endTime = new Date(endTime);

  const formattedStartTime = startTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });

  const formattedEndTime = endTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });

  return `${formattedStartTime} to ${formattedEndTime}`;
};
