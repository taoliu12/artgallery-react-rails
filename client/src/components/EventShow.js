import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { Box,Typography } from '@mui/material';
import { styled } from '@mui/system';

const RootComponent = styled('div')({
  backgroundColor: 'primary.main',
  color: 'white',
  '& .nestedElement': {
    fontSize: '16px',
    fontWeight: 'bold',
  },
});

const Heading = styled(Typography)({
  fontFamily: 'Georgia, serif',
  fontSize: '4rem', // Adjust the size as per your preference
});

const Date = styled(Typography)({
  fontFamily: 'Georgia, serif',
  fontSize: '3rem', // Adjust the size as per your preference
});

const EventShow = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`/events/${eventId}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error(error));
  }, [eventId]);

  if (!event) {
    return <div>Loading event...</div>;
  }

  console.log(event);
  return (
    <div>
            <Box height={80}></Box>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      {/* Render other event details */}
    </div>
  );
};

export default EventShow;
