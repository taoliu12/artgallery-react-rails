import Box from "@mui/material/Box";

const styles = {
  width: "100%",
  height: '350px',
  display: "flex",
  color: "white",
};

const Home = () => {
  return (
    <Box sx={styles}>
      <Box sx={{
        width: '600px',
        backgroundColor: "red",
        pX: 12,
        pY: 13,
      }}>
        <h3>Film Screening:</h3>
        <h1>Rosetta</h1>
        <i>Kieslowki Theatre</i>
      </Box>
      <Box sx={{
        flex: 1,
        backgroundImage: 'url("https://th.bing.com/th/id/OIP.aKsOu84Moq9ZSLO9fqQlbgHaEK?pid=ImgDet&rs=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'fit',
      }}>
      </Box>
    </Box>
  );
};

export default Home;
