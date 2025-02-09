import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
        sx={{
            backgroundColor: 'primary.main',
            textAlign: 'center',
            py: 2,
            marginTop: "5rem"
        }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Netfish
      </Typography>
    </Box>
  );
};

export default Footer;