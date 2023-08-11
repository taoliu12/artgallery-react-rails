import React, { useState, useEffect } from "react"; 
import { Box, Typography } from "@mui/material";
import EventCard from "./EventCard";

const styles = {
  maxWidth: "1111px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

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
      <Box height={110}></Box>
      <Typography
        sx={{
          textAlign: "left",
          fontFamily: "Georgia",
          fontSize: "2.5rem",
          width: "100%",
        }}
      >
        Events
      </Typography>
      {events?.map((event, idx) => (
        <>
          <EventCard event={event} key={idx}/>
        </>
      ))}
      <Box height={80}></Box>
    </Box>
  );
};

export default Events;
