import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const styles = {
  width: "100%",
  height: "380px",
  display: "flex",
  color: "white",
  alignItems: "center",
};

const colors = ['rgb(255, 143, 28)', '#003E85', '#00502B', '#ab1b1e'];

const PostCard = ({ index = 0 }) => {
  const isEven = index % 2 === 0;
  const getColor = () => colors[index % colors.length];

  const textBox = (
    <Box
      sx={{
        width: "740px",
        height: "100%",
        backgroundColor: getColor(),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingX: 6,
        paddingY: 3,
        alignItems: 'flex-start',
        fontWeight: 800,
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
      }}
      >
      <Typography
        sx={{
          textAlign: 'left',
          fontFamily: "Georgia, serif",
          fontSize: 55,
          letterSpacing: '-1px',
        }}
      >
        Rosetta: Double Life of Veronique
      </Typography>

      <Typography
        sx={{
          fontFamily: "Georgia, serif",
          fontSize: 25,
        }}
      >
        Film Screening
      </Typography>
    </Box>
  );

  const imageBox = (
    <Box
      sx={{
        flex: 1,
        height: "100%",
        backgroundImage:
          'url("https://petapixel.com/assets/uploads/2022/08/fdfs11-800x533.jpg")',                      
        backgroundSize: "cover",
        backgroundPosition: "fit",
      }}
    ></Box>
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
