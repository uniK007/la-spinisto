import React from 'react';
import { Grid, Stack } from '@mui/material';
import BetCard from './BetCard';
import Wheel from './Wheel';
import './Wheel.css';
import SpinButton from './SpinButton';

const WheelContainer = () => {

  const spinClickHandler = () => {
    let spinButton = document.getElementsByClassName('spinButton')
    let wheel = document.querySelector('.wheel')

    spinButton.addEventListener('click', () => {
      let degrees = Math.floor(360 + Math.random() * 360)
      wheel.style.transition = 'all 10s ease-out'
      wheel.style.transform = `rotate(${degrees}deg)`
    })

    wheel.addEventListener('transitioned', () => {
      spinButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none'
    })
  }

  return (
    <Grid container justifyContent='space-around' alignItems='center' mb={2}>

      <Grid item>
        <Stack spacing={2} alignItems='center'>
          <Wheel spinClickHandler={spinClickHandler}/>
          <SpinButton spinClickHandler={spinClickHandler}/>
        </Stack>
      </Grid>

      <Grid item>
        <BetCard />
      </Grid>

    </Grid>
  )
}

export default WheelContainer