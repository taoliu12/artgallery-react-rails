import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import HomeBanner from "./HomeBanner";
import PostCard from "./PostCard";

const styles = { width: "100%" };

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events")
      .then((response) => response.json())
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box sx={styles}>
      <HomeBanner />
      <Box
        sx={{
          display: 'flex',
          backgroundColor: "#3c3f42",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "1000px",
            width: "100%",
            justifyContent: "space-between",
            color: "white",                          
            py: 2.2,
          }}
        >
          <Box>
            <h3>HOURS:</h3>
            <i>Weekdays at 10am - 7pm, Weekends at 10am - 7pm</i>
          </Box>
          <Box>
            <h3>Admission to the gallery is always FREE.</h3>
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
};

export default Home;
