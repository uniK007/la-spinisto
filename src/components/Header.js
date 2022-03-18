import React from 'react'
import "../App.css";
import { Box } from '@mui/material';

const Header = () => {

    const title = "La $pinisto";
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap:'wrap',
            width:'100%',
            fontFamily: "'Rye', cursive",
            fontSize: '60px',
            background: 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))',
            color: '#278ea5',
            letterSpacing: '0.1rem',
            // position: 'fixed',top:'0',width:'100%' 
        }}>{title}</Box>
    )
}

export default Header