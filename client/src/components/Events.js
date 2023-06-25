import React from 'react';
import { Link } from 'react-router-dom';

const EventIndex = ({ events }) => {
  return (
    <div>
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

export default EventIndex;
