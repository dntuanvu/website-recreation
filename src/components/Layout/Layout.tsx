import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit">About</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button color="inherit">Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
    <Container sx={{ paddingTop: '20px' }}>{children}</Container>
  </div>
);

export default Layout;
