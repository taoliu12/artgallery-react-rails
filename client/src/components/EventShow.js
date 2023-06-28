import React from 'react';
import { useLocation } from 'react-router-dom';
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

const EventShow = ( { event }) => {
  const location = useLocation(); // Access the location object

  // Retrieve the event object from the location state
  // const event = location.state?.event;
  // const event = {
  //   title: 'Monet/Mitchell: Painting the French Landscape',
  //   date: 'March 25–June 25 2023',
  //   time: 'All opening hours',
  //   summary: 'Painting the French Landscape',
  //   description: 'The exhibition explores the ways in which Monet and Mitchell engaged with the French landscape. Monet spent his final decades in rural Giverny, some 50 miles to the northwest of Paris, while, from 1968 until 1992, Mitchell lived at nearby Vétheuil, overlooking a house once inhabited by the French painter. Both artists addressed similar themes of trees, earth, water, and flowers as well as the inspiration of their own gardens. The exhibition explores the connections, both in subject matter and technique, that Mitchell shared with Monet. It also shows how her compositional formats, vibrant color, and gestural brushwork offer fascinating parallels with Monet’s.'
  // }

  if (!event) {
    return <div>No event found.</div>;
  }

  return (
    <div>
      <Box height={95}></Box>
      <Heading variant="h1" component="h1">
        {event.title}
      </Heading>
      <Date>{event.date}</Date>
      <p>{event.summary}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventShow;
