import Box from "@mui/material/Box";
import HomeBanner from "./HomeBanner";
import PostCard from "./PostCard";

const styles = { width: "100%" };

const Home = () => {
  return (
    <Box sx={styles}>
      <HomeBanner />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          backgroundColor: "#3c3f42",
          px: 3,
          py: 2
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
      <PostCard index={0} />
      <PostCard index={1} />
      <PostCard index={2} />
      <PostCard index={3} />
    </Box>
  );
};

export default Home;
