import Box from "@mui/material/Box";

const styles = {
  width: "100%",
  height: '350px',
  display: "flex",
  color: "white",
};

const PostCard = ({ index = 0 }) => {
  const isEven = index % 2 === 0;
  const textBox = (
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
  );

  const imageBox = (
    <Box sx={{
      flex: 1,
      backgroundImage: 'url("https://th.bing.com/th/id/OIP.aKsOu84Moq9ZSLO9fqQlbgHaEK?pid=ImgDet&rs=1")',
      backgroundSize: 'cover',
      backgroundPosition: 'fit',
    }}></Box>
  );

  return (
    <Box sx={styles}>
      {isEven ? (
        <>
          {imageBox}
          {textBox}
        </>
      ) : (
        <>
          {textBox}
          {imageBox}
        </>
      )}
    </Box>
  );
};

export default PostCard;
