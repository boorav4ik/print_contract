import React from 'react';
import { Card, CardActionArea, Typography } from '@mui/material';

const Index = () => (
  <Card sx={{ height: 160, textAlign: 'center' }}>
    <CardActionArea sx={{ width: '100%', height: '100%' }}>
      <Typography component="div" variant="h5">
        + Add New Client Card
      </Typography>
    </CardActionArea>
  </Card>
);

export default Index;
