import React from 'react';
import { CssBaseline, Grid, Box, Typography } from '@mui/material';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#1A202C' }}>
        <Sidebar />
        <Box sx={{ flex: 1, padding: 2 }}>
          <Typography variant="h5" sx={{ color: 'white', marginBottom: 2 }}>
            Analytics Dashboard
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Widget title="Website Analytics" data={{ spending: 127, orders: 18, items: 2300 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Widget title="Average Daily Sales" data={{ sales: 28450 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Widget title="Sales Overview" data={{ orders: 62.2, visits: 25.5 }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default App;
