import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {createDateTimeObj} from '../utils/formatTime'

const Container = styled("div")({
  maxWidth: "750px",
  textAlign: "left",
  marginTop: 30,
});

const Heading = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "3rem",
});

const Date = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "2rem",
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
    <Container>
      <Box height={80}></Box>
      <Heading>{event.title}</Heading>
      <Date>{event.date}</Date>
      <Typography sx={{ whiteSpace: "pre-line", mt: 4, mb: 8 }}>
        {event.description}
      </Typography>
    </Container>
  );
};

export default EventShow;
