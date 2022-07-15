import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/clients">Clients</Link>

        <Typography>Services</Typography>
      </Toolbar>
    </AppBar>
  );
}
