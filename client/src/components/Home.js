import Box from "@mui/material/Box";
import HomeBanner from "./HomeBanner";

const styles = { width: "100%" };

const Home = () => {
  return (
    <Box sx={styles}>       
      <HomeBanner />
    </Box>
  );
};

export default Home;
