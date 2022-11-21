import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

export default function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Riley Grotenhuis
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Link href="/projects">
                            <Typography textAlign="center">Projects</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Link href="/employment">
                            <Typography textAlign="center">Employment</Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Link href="/blog">
                            <Typography textAlign="center">Blog</Typography>
                        </Link>
                    </MenuItem>
                </Menu>
            </Box> 
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Riley Grotenhuis
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    href="/projects"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Projects
                </Button>
                <Button
                    href="/employment"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Employment
                </Button>
                <Button
                    href="/blog"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Blog
                </Button>
            </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
};