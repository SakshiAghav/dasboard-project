import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: '#2D3748',
        color: 'white',
        height: '100vh',
        paddingTop: 2,
      }}
    >
      <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 3 }}>
        Vuexy
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AnalyticsIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
