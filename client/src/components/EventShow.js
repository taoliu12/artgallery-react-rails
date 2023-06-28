import React from 'react';
import { useLocation } from 'react-router-dom';

const EventShow = () => {
  const location = useLocation(); // Access the location object

  // Retrieve the event object from the location state
  const event = location.state?.event;

  if (!event) {
    return <div>No event found.</div>;
  }

  return (
    <div>
      <h2>{event.title}</h2>
      {/* Render other event details */}
    </div>
  );
};

export default EventShow;
