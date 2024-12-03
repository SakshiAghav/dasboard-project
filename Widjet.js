import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Widget = ({ title, data }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#2D3748',
        color: 'white',
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Box sx={{ marginTop: 2 }}>
          {Object.keys(data).map((key) => (
            <Typography key={key} variant="body2">
              {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${data[key]}`}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Widget;
