import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { createDateTimeObj, formatDate } from "../utils/formatTime";

const EventCard = ({ event }) => {
  const dateTimeObj = createDateTimeObj(event.attributes.date);

  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "30px",
        paddingBottom: "30px",
        justifyContent: "center",
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        textAlign: "left",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "777px",
        }}
      >
        <Box
          sx={{
            mr: 5,
          }}
        >
          <Typography
            sx={{
              display: "block",
              paddingBottom: "12px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Helvetica",
              color: "gray",
              textAlign: "center",
            }}
          >
            {dateTimeObj.shortMonth}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia",
              fontSize: "3rem",
              lineHeight: "1rem",
              textAlign: "center",
            }}
          >
            {dateTimeObj.dayOfMonth}
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              textDecoration: "none",
              textAlign: "left",
              fontFamily: "Georgia",
              fontSize: "2.2rem",
              lineHeight: "2rem",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={{
                pathname: `/events/${event.id}`,                 
              }}
              key={event.id}
            >
              {event.attributes.title}
            </Link>
            <Typography
              sx={{
                pt: 1.2,
                textAlign: "left",
                fontFamily: "arial",
                fontSize: 16,
              }}
            >
              {event.attributes.summary}
            </Typography>
            <Typography
              sx={{
                pt: 1.2,
                textAlign: "left",
                fontFamily: "arial",
                fontSize: 20,
              }}
            >
              {event.attributes.formatted_time_range}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCard;
