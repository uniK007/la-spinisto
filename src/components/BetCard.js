import React, { useEffect, useRef, useState } from 'react';
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
    const [bet, setBet] = useState(0);

    const prevBetRef = useRef(credit)

    useEffect(() => {
        let betScore = prevBetRef.current - credit
        setBet(betScore)

        if (credit <= 0) {
            setCredit(0)
        }
    }, [credit])

    const betHundred = () => {
        setCredit(prevCredit => prevCredit - 100)
    }

    const betFiveHundred = () => {
        setCredit(prevCredit => prevCredit - 500)
    }

    const betThousand = () => {
        setCredit(prevCredit => prevCredit - 1000)
    }

    return (
        <Box className='container' p={3 / 2} mt={2} mb={1 / 2}>
            <Stack spacing={3 / 2}>

                <ThemeProvider theme={theme}>
                    <Button
                        variant='text'
                        disableRipple={true}
                    >
                        You have Credit : <PaidIcon />{credit}
                    </Button>
                </ThemeProvider>

                <Typography
                    variant='h6'
                    component='p'
                    fontFamily="'Bebas Neue', cursive"
                    letterSpacing='0.2rem'
                    alignSelf='center'
                >
                    Place your Bet
                </Typography>

                <ButtonGroup
                    variant="contained"
                    aria-label="outlined button group"
                    color='secondary'>
                    <Button
                        startIcon={<PaidIcon />}
                        onClick={betHundred}
                    >
                        100
                    </Button>
                    <Button
                        startIcon={<PaidIcon />}
                        onClick={betFiveHundred}
                    >
                        500
                    </Button>
                    <Button
                        onClick={betThousand}
                        startIcon={<PaidIcon />}>
                        1000
                    </Button>
                </ButtonGroup>

                <Typography
                    variant='h6'
                    component='p'
                    fontFamily="'Bebas Neue', cursive"
                    letterSpacing='0.2rem'
                    alignSelf='center'
                >
                    Your Bet
                </Typography>

                <Typography
                    variant='h6'
                    component='p'
                    fontFamily="'Bebas Neue', cursive"
                    letterSpacing='0.2rem'
                    fontSize='2rem'
                    textAlign='center'
                    color='#086972'
                >
                    {bet}
                </Typography>

            </Stack>
        </Box>
    )
}

export default BetCard