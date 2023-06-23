import Box from "@mui/material/Box";
const styles = {
  width: "100%",
  height: "300px",
  color: "white",
  backgroundColor: "#3c3f42",
};

const Footer = () => {
  return (
    <Box sx={styles}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          px: 3,
          py: 2,
        }}
      >
        <Box>
          <h4>HOURS:</h4>
          <i>Weekdays at 10am - 7pm, Weekends at 10am - 7pm</i>
        </Box>
        <Box>
          <h4>Admission to the museum is always FREE.</h4>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
