import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {     
    fetch("api/events")
      .then((response) => response.json())
      // .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {events.map((event) => (
        <Link
          to={{
            pathname: `/events/${event.id}`,
            state: { event }, // Pass the event object as state
          }}
          key={event.id}
        >
          <div>
            <h3>{event.title}</h3>
            {/* Render other event card details */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Events;
