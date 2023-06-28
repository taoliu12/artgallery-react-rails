import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import EventCard from "./EventCard";

const styles = { maxWidth: "1111px" };

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events")
      .then((response) => response.json())
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("Events", events[0]);

  return (
    <Box sx={styles}>
      <Box height={60}></Box>
      {events?.map((event, index) => (
        <EventCard event={event} />
      ))}
    </Box>
  );
};

export default Events;
