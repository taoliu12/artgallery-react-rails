import Box from "@mui/material/Box";

const styles = {
  backgroundImage:
    'url("https://www.slam.org/wp-content/uploads/2022/08/MM_2-2200x1000.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: 400,
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "bottom",
};

const HomeBanner = () => {
  return (

      <Box sx={styles}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#3c3f42",
            justifyContent: "center",
            alignItems: "center",
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
              <i>Weekdays at 10am - 7pm, Weekends at 10am - 5pm</i>
            </Box>
            <Box>
              <h3>Admission to the gallery is always FREE.</h3>
            </Box>
          </Box>
        </Box>
      </Box>

  );
};

export default HomeBanner;
