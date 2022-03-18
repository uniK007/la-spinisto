import React, { useState } from 'react';
import { Typography, Stack, ButtonGroup, Button, } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import "./BetCard.css";

const BetCard = () => {
    const [credit, setCredit] = useState(10000);
    return (
        <div className='container' style={{ padding: '1rem', }}>
            <Stack spacing={2}>
                <Button variant='text' disabled sx={{ background: 'white', }}>You have Credit : <PaidIcon />{credit}</Button>

                <Typography variant='h6' component='p' sx={{ display: 'flex', justifyContent: 'center', fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.2rem', }}>Place your Bet
                </Typography>

                <ButtonGroup variant="contained" aria-label="outlined button group" color='secondary'>
                    <Button startIcon={<PaidIcon />}>100</Button>
                    <Button startIcon={<PaidIcon />}>500</Button>
                    <Button startIcon={<PaidIcon />}>1000</Button>
                </ButtonGroup>

            </Stack>
        </div>
    )
}

export default BetCard