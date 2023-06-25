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
import { textShadow } from "@mui/system";
import NavbarButton from "./NavbarButton";
import { useLocation } from 'react-router-dom';

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
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={isScrolled || !isHomePage ? "" : "transparentAppBar"}
      position="static"
      sx={{
        color: "white",
        position: `fixed !important`,         
        backgroundColor: isScrolled || !isHomePage ? "#00438A" : "transparent",
        boxShadow: isScrolled || !isHomePage ? "0 2px 4px rgba(0, 0, 0, 0.4)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        textShadow: "0px 0px 3px #00000",
        zIndex: "11",
        height: '65px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            paddingTop: isScrolled || !isHomePage ? 0 : 3,
            transition: "padding-top 0.3s ease",
            height: '45px'
          }}
        >
          <Box id="logo-title">
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                marginTop: isScrolled || !isHomePage ? -1 : 0,
                display: { xs: "none", md: "flex" },
                fontFamily: "Georgia, serif",
                fontWeight: 300,
                fontSize: isScrolled || !isHomePage ? "30px" : "50px",
                letterSpacing: "0px",
                color: "inherit",
                textDecoration: "none",
                transition: "font-size 0.3s ease, margin-top 0.3s ease",
              }}
            >
              Tao Art Gallery
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "right",
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
            id="horizontal-nav-links"
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
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
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
          {/*hamburger*/}
          <Box
            id="test"
            sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}
          >
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
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
