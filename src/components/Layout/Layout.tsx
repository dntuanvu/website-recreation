import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Recipe App
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">SHOP</Button>
        </Link>
        <Link href="/recipes" passHref>
          <Button color="inherit">RECIPES</Button>
        </Link>
        <Link href="/" passHref>
          <Button color="inherit">LEARN</Button>
        </Link>
        <Link href="/" passHref>
          <Button color="inherit">ABOUT</Button>
        </Link>
        <Link href="/" passHref>
          <Button color="inherit">BLOG</Button>
        </Link>
      </Toolbar>
    </AppBar>
    <Container sx={{ paddingTop: '20px' }}>{children}</Container>
  </>
);

export default Layout;
