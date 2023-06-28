import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
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
      <Box height={80}></Box>
      <Typography
        sx={{
          textAlign: "left",
          fontFamily: "Georgia",
          fontSize: "2.2rem",
          mb: 4,
        }}
      >
        Events
      </Typography>
      {events?.map((event, index) => (
        <>
          {/* <Box
            sx={{
              height: "2px",
              backgroundColor: "#E8E8E8",
            }}
          >             
          </Box> */}
          <EventCard event={event} />
        </>
      ))}
    </Box>
  );
};

export default Events;
