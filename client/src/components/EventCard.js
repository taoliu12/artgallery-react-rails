import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const EventCard = ({ event }) => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "30px",
        paddingBottom: "30px",
        justifyContent: "space-between",
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        // lineHeight: "33px",
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
        <Box sx={{
          mr: 5
        }}>
          <Typography
            sx={{
              display: 'block',
              paddingBottom: "9px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Helvetica",
              color: "gray",
              textAlign: "center",
            }}
          >
            Jun
          </Typography>
          <Typography
            sx={{
              fontFamily: "Georgia",
              fontSize: "2.2rem",
              lineHeight: "2rem",
              textAlign: "center",
            }}
          >
            08
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
                state: { event }, // Pass the event object as state
              }}
              key={event.id}
            >
              {event.attributes.title}
            </Link>
          </Box>
          <Typography
            sx={{
              pt: 1.2,
              textAlign: "left",
              fontFamily: "arial",
              fontSize: 20,
            }}
          >
            1 - 2pm
          </Typography>
        </Box>
      </Box>
      {/* <Box
        sx={{
          width: "auto",
          paddingTop: "0px",
          paddingRight: "0px",
          paddingLeft: "10px",
          textAlign: "right",
          objectFit: "fill",
          "@media (max-width: 600px)": {
            marginTop: "14px",
            textAlign: "center",
          },
        }}
      >
        <h3>image</h3>
      </Box> */}
    </Box>
  );
};

export default EventCard;
