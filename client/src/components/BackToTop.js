import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Fade from "@mui/material/Fade";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <ScrollTop {...props}>
        <Button
          aria-label="scroll back to top"
          sx={{
            textTransform: 'none',
            letterSpacing: 0,
            borderRadius: 5,
            px: 1,
            boxShadow: 3,
            backgroundColor: "gray",
            color: "white",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          Back to Top
        </Button>
      </ScrollTop>
    </React.Fragment>
  );
}
