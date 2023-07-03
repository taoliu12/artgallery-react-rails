import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  createDateTimeObj,
  formatDate,
  formatTimeRange,
} from "../utils/formatTime";

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
      .then(({ data }) => setEvent(data))
      .catch((error) => console.error(error));
  }, [eventId]);

  if (!event) {
    return <div>Loading event...</div>;
  }
  console.log(event);
  console.log(event.attributes);
  console.log(event.attributes?.title);
  return (
    <Container>
      <Box height={80}></Box>
      <Heading>{event.attributes?.title}</Heading>
      <Date>{formatDate(event.attributes?.date)}</Date>
      <Date>{event.attributes?.formatted_time_range}</Date>
      <Typography
        sx={{ fontWeight: "bold", whiteSpace: "pre-line", mt: 5, mb: 4 }}
      >
        {event.attributes?.summary}
      </Typography>
      <Typography sx={{ whiteSpace: "pre-line" }}>
        {event.attributes?.description}
      </Typography>
    </Container>
  );
};

export default EventShow;
