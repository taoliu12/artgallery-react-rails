import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import Box from "@mui/material/Box";

const colors = ["rgb(255, 143, 28)", "#003E85", "#00502B", "#ab1b1e"];

const HomeCard = ({ event, index = 0 }) => {
  const isEven = index % 2 === 0;
  const getColor = () => colors[index % colors.length];
  const formattedTime = new Date(event.attributes.time).toLocaleString();

  const styles = {
    width: "100%",
    height: "350px",
    display: "flex",
    color: "white",
    justifyContent: "center",
    backgroundColor: getColor(),
  };

  const textBox = (
    <Box
      sx={{
        width: "750px",
        display: "flex",
        justifyContent: isEven ? "left" : "right",

      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        to={{
          pathname: `/events/${event.id}`,
          // state: { event }, // Pass the event object as state
        }}
        key={event.id}
      >
        <Box
          sx={{
            width: "500px",
            height: "100%",
            backgroundColor: getColor(),
            display: "flex",
            flexDirection: "column",
            // justifyContent: "flex-start",
            justifyContent: "space-between",
            paddingX: 5,
            pt: 4,
            pb: 5,
            textAlign: "left",
            fontWeight: 800,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: "Georgia, serif",
              fontSize: 45,
              letterSpacing: "-1px",
              lineHeight: 1,
              mb: 2,
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              to={{
                pathname: `/events/${event.id}`,
                // state: { event }, // Pass the event object as state
              }}
              key={event.id}
            >
              {event.attributes.title}
            </Link>
          </Typography>

          <Box>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: 25,
              }}
            >
              {event.attributes.event_type}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: 30,
                mb: 1,
              }}
            >
              {event.attributes.date}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );

  const imageBox = (
    <Box
      sx={{
        // flex: 1,
        width: "1200px",
        height: "100%",
        backgroundImage: `url(${event.attributes.banner_image})`,         
        backgroundSize: "cover",
        backgroundPosition: "fit",
      }}
    ></Box>
  );
console.log(event.attributes.banner_image);
debugger
  return (
    <Box sx={styles}>
      
      {isEven ? (
        <>
          {imageBox}
          {textBox}
        </>
      ) : (
        <>
          {textBox}
          {imageBox}
        </>
      )}
    </Box>
  );
};

export default HomeCard;
