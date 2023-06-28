import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const EventCard = ({ event }) => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "20px",
        paddingBottom: "20px",
        justifyContent: "space-between",
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        lineHeight: "33px",
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
        <Typography
          component="div"
          sx={{
            order: 0,
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: "auto",
            fontFamily: "Georgia",
            fontSize: "2.2rem",
          }}
        >
          Jul 08
        </Typography>
        <Link
          to={{
            pathname: `/events/${event.id}`,
            state: { event }, // Pass the event object as state
          }}
          key={event.id}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: "Georgia",
              fontSize: "2.2rem",
            }}
          >
            Drop-in Collection Tour: Art and the Written Word
          </Typography>
        </Link>
      </Box>
      <Box
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
      </Box>
    </Box>
  );
};

export default EventCard;
