import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
  const footerText = "The Game is addictive, play at your own risk";
  return (
    <Box sx={{
      mt: 2,
      display: 'flex', justifyContent: 'center',
      color: '#7fb0bb',
      fontSize: '1rem',
      letterSpacing: '1px',
      p: 2, width:'100%',
      background: 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))',
      position: 'fixed', bottom: '0',
    }}>
      {footerText}
    </Box>
  )
}

export default Footer