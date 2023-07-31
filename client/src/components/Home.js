import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import HomeBanner from "./HomeBanner";
import HomeCard from "./HomeCard";

const styles = { width: "100%" };

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events?limit=5")
      .then((response) => response.json())
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((error) => console.error(error));
  }, []);
   
  return (
    <Box sx={styles}>
      <HomeBanner />
      {events?.map((event, index) => (
        <>
          <HomeCard index={index} event={event} />
        </>
      ))}
    </Box>
  );
};

export default Home;
