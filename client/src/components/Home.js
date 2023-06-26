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
            py: 3,
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
      <PostCard index={0} />
      <PostCard index={1} />
      <PostCard index={2} />
      <PostCard index={3} />
    </Box>
  );
};

export default Home;
