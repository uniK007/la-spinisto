import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
  const footerText = "The Game is addictive, play at your own risk";
  return (
    <Box p={2} sx={{
      textAlign:'center',
      color: '#7fb0bb',
      fontSize: '1rem',
      letterSpacing: '1px',
      background: 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))',
    }}>
      <b>{footerText}</b>
    </Box>
  )
}

export default Footer