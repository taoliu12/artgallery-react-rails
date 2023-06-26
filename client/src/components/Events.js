import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import PostCard from "./PostCard";

const styles = { width: "100%" };

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
        <PostCard index={index} event={event} />
      ))}
    </Box>
  );
};

export default Events;
