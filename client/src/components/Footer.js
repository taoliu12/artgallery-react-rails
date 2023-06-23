import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

const styles = {
  width: "100%",
  height: "320px",
  color: "white",
  backgroundColor: "#3c3f42",
  display: "flex",
  justifyContent: "center",
  paddingY: 8,
};

const Footer = () => {
  const items = [
    "Careers and Opportunities",
    "Subscribe",
    "Blog",
    "Contact",
    "Terms of Use",
    "Privacy Policy",
  ];

  return (
    <Box sx={styles}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "1150px",
          justifyContent: "space-between",
        }}
      >
        <Box>
        <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Georgia, serif",
                fontWeight: 300,
                fontSize: "35px",
                letterSpacing: "0px",
                color: "inherit",
                textDecoration: "none",
                marginBottom: 2
              }}
            >
              React Art Gallery
            </Typography>
          <List
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {items.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemText
                  primary={item}
                  sx={{
                    paddingRight: 3,
                    whiteSpace: "nowrap",
                  }}
                />
              </ListItem>
            ))}
          </List>
          <p>
            React Drive, Mui Park, Seattle, WA 55555-1380 | 555.555.5555
          </p>
        </Box>
        <Box>
          <h4>Social media icons</h4>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
