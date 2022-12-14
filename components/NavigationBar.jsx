import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import Grid from '@mui/material/Grid';

export default function NavigationBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            style={{
                background: 'none',
                border: 'none',
                boxShadow: 'none',
                marginBottom: '30px',
            }}
        >
            <Container maxWidth="xl" disableGutters>
                <Toolbar disableGutters>
                    <Link
                        href="/"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Grid sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Image
                                alt="Logo"
                                src={Logo}
                                placeholder="blur"
                                width={50}
                                height={50}
                                style={{
                                    display: 'flex',
                                    margin: 'auto',
                                }}
                            />
                        </Grid>
                    </Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
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
                            <Link
                                href="/about"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        About
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link
                                href="/employment"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Employment
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link
                                href="/blog"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Blog
                                    </Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Link
                        href="/"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            mr: 2,
                            flexGrow: 1,
                        }}
                    >
                        <Grid sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <Image
                                alt="Logo"
                                src={Logo}
                                placeholder="blur"
                                width={50}
                                height={50}
                                style={{
                                    display: 'flex',
                                    margin: 'auto',
                                }}
                            />
                        </Grid>
                    </Link>
                    <Box
                        sx={{
                            justifyContent: 'right',
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Link
                            href="/about"
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    mr: 5,
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }}
                            >
                                About
                            </Button>
                        </Link>
                        <Link
                            href="/employment"
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    mr: 5,
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }}
                            >
                                Employment
                            </Button>
                        </Link>
                        <Link
                            href="/blog"
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Blog
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
