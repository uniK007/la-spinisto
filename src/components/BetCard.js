import React, { useState } from 'react';
import { Typography, Stack, ButtonGroup, Button, Box, createTheme, ThemeProvider } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import "./BetCard.css";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0f766c'
        }
    },
});

const BetCard = () => {

    const [credit, setCredit] = useState(10000);

    // const betHandler = () => {
    //     const Hundred = document.getElementById('100')
    //     const fiveHundred = document.getElementById('500')
    //     const oneThousand = document.getElementById('1000')

    // }

    return (
        <Box className='container' p={3 / 2} mt={2} mb={1 / 2}>
            <Stack spacing={3 / 2}>

                <ThemeProvider theme={theme}>
                    <Button
                        variant='text'
                        disableRipple={true}>You have Credit : <PaidIcon />{credit}
                    </Button>
                </ThemeProvider>

                <Typography
                    variant='h6'
                    component='p'
                    fontFamily="'Bebas Neue', cursive"
                    letterSpacing='0.2rem'
                    alignSelf='center'>
                    Place your Bet
                </Typography>

                <ButtonGroup
                    variant="contained"
                    aria-label="outlined button group"
                    color='secondary'>
                    <Button
                        id='100'
                        startIcon={<PaidIcon />}>
                        100
                    </Button>
                    <Button
                        id='500'
                        startIcon={<PaidIcon />}>
                        500
                    </Button>
                    <Button
                        id='1000'
                        startIcon={<PaidIcon />}>
                        1000
                    </Button>
                </ButtonGroup>

                {/* <Typography variant='h6' component='p' fontFamily="'Bebas Neue', cursive" letterSpacing='0.2rem' alignSelf='center'>Your Bet</Typography>

                <Typography variant='h6' component='p' fontFamily="'Bebas Neue', cursive" letterSpacing='0.2rem' alignSelf='center'>You Won</Typography> */}

            </Stack>
        </Box>
    )
}

export default BetCard