import React from 'react'
import { Typography } from '@mui/material';

const Header = () => {

    const title = "La $pinisto";
    return (
        <Typography sx={{
            textAlign:'center',
            fontFamily: "'Rye', cursive",
            fontSize: '60px',
            background: 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))',
            color: '#278ea5',
            letterSpacing: '0.1rem',
        }}>{title}</Typography>
    )
}

export default Header