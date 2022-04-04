import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
import BetCard from './BetCard';
import AllOutIcon from '@mui/icons-material/AllOut';
import Wheel from './Wheel';

const WheelContainer = () => {

  const spinHandler = () => {
    let spinButton = document.getElementById('spinButton')
    let wheel = document.querySelector('wheel')

    spinButton.addEventListener('click', () => {
      let degrees = Math.floor(1000 + Math.random() * 1000)
      wheel.style.transition = 'all 10s ease-out'
      wheel.style.transform = `rotate(${degrees}deg)`
    })
  }

  return (
    <Grid container justifyContent='space-around' alignItems='center' mt={2} mb={2}>

      <Grid item>
        <Stack spacing={2} alignItems='center'>
          <Wheel />
          <Button
            id='spinButton'
            onClick={spinHandler}
            variant='contained'
            startIcon={<AllOutIcon />}
            sx={{ background: 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))' }}>
            Spin
          </Button>
        </Stack>
      </Grid>

      <Grid item>
        <BetCard />
      </Grid>

    </Grid>
  )
}

export default WheelContainer