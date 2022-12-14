import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';

const pages = [
    { name: 'Books', path: '/books' },
    { name: 'Sell', path: '/sell' },
    { name: 'Register', path: '/register' },
    { name: 'Log in', path: '/login' },
];

function Nav() {
    return (
        <AppBar position="static" elevation={0} style={{ backgroundColor: '#0A1929' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image
                        src="/bookseller.png"
                        alt="logo"
                        width={170}
                        height={130}
                        style={{ color: 'white' }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BookSeller
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'flex', md: 'flex' },
                        }}
                    >
                        {pages.map(page => (
                            <Link href={`/${page.path}`}>
                                <Button
                                    variant="text"
                                    style={{
                                        color: 'white',
                                        backgroundColor: '#0A1929',
                                    }}
                                >
                                    <Typography key={page.name}>{page.name}</Typography>
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;
