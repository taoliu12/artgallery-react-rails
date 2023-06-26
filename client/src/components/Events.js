import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

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
    <div>
      <Box height={90}></Box>
      <h1>Events</h1>
      {events?.map((event) => (
        <Link
          to={{
            pathname: `/events/${event.id}`,
            state: { event }, // Pass the event object as state
          }}
          key={event.id}
        >
          <div>             
            <h3>{event.attributes.title}</h3>
            {/* Render other event card details */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Events;
