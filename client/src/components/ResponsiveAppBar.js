import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "@mui/material";
import { textShadow } from "@mui/system";
import NavbarButton from "./NavbarButton";
import { useLocation } from "react-router-dom";

const pages = [
  { title: "Artworks", route: "/artworks", reqLogin: false, alwaysShow: true },
  // { title: "Articles", route: "/articles", reqLogin: false, alwaysShow: true },
  { title: "Events", route: "/events", reqLogin: false, alwaysShow: true },
  { title: "My Favorites", route: "/favorite_artworks", reqLogin: true },
  { title: "Submit Artwork", route: "/artworks/new", reqLogin: true },
  // { title: "Signup", route: "/signup", reqLogin: false },
  // { title: "Login", route: "/login", reqLogin: false },
];

const settings = [
  { title: "Profile", route: "/profile" },
  { title: "Logout", route: "/logout" },
];

function ResponsiveAppBar({ loggedInUser, handleLogout }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className={
        isScrolled || !isHomePage || isSmallScreen ? "" : "transparentAppBar"
      }
      position="static"
      sx={{
        color: "white",
        position: `fixed !important`,
        backgroundColor:
          isScrolled || !isHomePage || isSmallScreen
            ? "#00438A"
            : "transparent",
        boxShadow:
          isScrolled || !isHomePage || isSmallScreen
            ? "0 2px 4px rgba(0, 0, 0, 0.4)"
            : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        textShadow: "0px 0px 3px #00000",
        zIndex: "11",
        height: "65px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            paddingTop: isScrolled || !isHomePage || isSmallScreen ? 0 : 3,
            transition: "padding-top 0.3s ease",
            height: "45px",
            "@media (max-width: 600px)": {
              display: "flex",
              justifyContent: "space-between",
            },
          }}
        >
          <Box id="logo-title">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography
                sx={{
                  mr: 2,
                  marginTop:
                    isScrolled || !isHomePage || isSmallScreen ? -1 : 0,
                  fontFamily: "Georgia, serif",
                  fontWeight: 300,
                  fontSize:
                    isScrolled || !isHomePage || isSmallScreen
                      ? "30px"
                      : "50px",
                  letterSpacing: "0px",
                  color: "inherit",
                  textDecoration: "none",
                  transition: "font-size 0.3s ease, margin-top 0.3s ease",
                  wordWrap: true,
                }}
              >
                Tao Art Gallery
              </Typography>
            </Link>
          </Box>
          <Box
            id="horizontal-nav-links"
            sx={{
              flexGrow: 1,
              textAlign: "right",
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >
            {pages
              .filter(
                (page) =>
                  page.alwaysShow ||
                  (!page.reqLogin && !loggedInUser) ||
                  (page.reqLogin && loggedInUser)
              )
              .map((page) => (
                <NavbarButton
                  item={page.title}
                  route={page.route}
                  key={page.title}
                />
              ))}
          </Box>
          {loggedInUser && (
            <Box id="avatar-menu" sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="mobile-menu"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link to="/profile">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      sx={{ my: 2, color: "black" }}
                      textAlign="center"
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="" onClick={handleLogout}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      sx={{ my: 2, color: "black" }}
                      textAlign="center"
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
          )}
          <Box id="hamburger" sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <Link to="/artworks">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Artworks</Typography>
                </MenuItem>
              </Link>
              {pages.map(
                (page) =>
                  page.reqLogin &&
                  loggedInUser && (
                    <Link to={page.route} key={page.title}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                      </MenuItem>
                    </Link>
                  )
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
