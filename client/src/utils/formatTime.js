export const createDateTimeObj = (dateString) => {
  const date = new Date(dateString);

  return {
    shortMonth: date.toLocaleDateString("en-US", { month: "short" }),
    dayOfMonth: date.toLocaleDateString("en-US", { day: "numeric" }),
    startHour: date.toLocaleTimeString("en-US", { hour: "numeric" }),
    endHour: "",
  };
};
