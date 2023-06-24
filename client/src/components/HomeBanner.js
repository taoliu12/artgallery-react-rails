import Box from '@mui/material/Box';

const styles = {
  backgroundImage: 'url("https://www.slam.org/wp-content/uploads/2022/08/MM_2-2200x1000.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 600,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const HomeBanner = () => {
  return (
    <Box sx={styles}>
      {/* Content inside the Box */}
    </Box>
  );
};

export default HomeBanner;
