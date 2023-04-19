import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DarkModeButton from './DarkModeButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem'; 
import { textShadow } from '@mui/system';
import NavbarButton from './NavbarButton';

const pages = [
  { title: 'Artworks', route: '/artworks', reqLogin: false, alwaysShow: true},
  { title: 'My Favorites', route: '/favorite_artworks', reqLogin: true },
  { title: 'Submit Artwork', route: '/artworks/new', reqLogin: true },
  { title: 'Signup', route: '/signup', reqLogin: false },
  { title: 'Login', route: '/login', reqLogin: false },
];

const settings = [
  { title: 'Profile',  route: '/profile' }, 
  { title: 'Logout', route: '/logout' }];

function ResponsiveAppBar({loggedInUser, handleLogout}) {
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
    <AppBar position="static" sx={{
      color: 'white',
      position: `fixed !important`,
      backgroundColor: '#00438A',
      textShadow: '0px 0px 3px #00000',
      zIndex: '11',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/posts'> 
            <ColorLensIcon sx={{ display: { color: 'white',
            fontSize: '33px',xs: 'none', sm: 'flex' }, mr: 1 }} />
          </Link>
          <Typography 
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Fredoka One',
              fontWeight: 500,
              fontSize: '25px',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Art Gallery
          </Typography>
          {/*hamburger*/}
          <Box id="test" sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <Link to='/posts'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Artworks</Typography>
                  </MenuItem>
                </Link>
                {pages.map(page =>
                  page.reqLogin && loggedInUser && (
                    <Link to={page.route} key={page.title}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                      </MenuItem>
                    </Link>
                  )
                )} 
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>                
            {pages.filter(page => 
              page.alwaysShow || 
              (!page.reqLogin && !loggedInUser) || 
              (page.reqLogin && loggedInUser)
            ).map(page => (
              <NavbarButton item={page.title} route={page.route} key={page.title} />
            ))}
          </Box>
          <DarkModeButton />

          { loggedInUser &&
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
     
                <Link to='/profile' >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ my: 2, color: 'black'}} textAlign="center">
                     Profile
                  </Typography>
                </MenuItem>
                </Link>
                <Link to='' onClick={handleLogout} >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ my: 2, color: 'black'}} textAlign="center">
                     Logout
                  </Typography>
                </MenuItem>
                </Link>
            </Menu>
          </Box> 
        }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;