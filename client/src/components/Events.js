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
      <Box height={90}></Box>
      <h1>Events</h1>

      {events?.map((event, index) => (
        <Link
          to={{
            pathname: `/events/${event.id}`,
            state: { event }, // Pass the event object as state
          }}
          key={event.id}
        >
          <div>             
            <PostCard index={index} event={event}/>
          </div>
        </Link>
      ))}
    </Box>
  );
};

export default Events;
