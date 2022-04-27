import React, { useRef } from 'react';
import { Button, Grid, Stack } from '@mui/material';
import AllOutIcon from '@mui/icons-material/AllOut';
import BetCard from './BetCard';
import Wheel from './Wheel';
// import './Wheel.css';

const WheelContainer = () => {

  const wheelRef = useRef()
  // const spinClickHandler = () => {
  //   let spinButton = document.getElementsByClassName('spinButton')
  //   let wheel = document.querySelector('.wheel')

  //   wheel.addEventListener('transitioned', () => {
  //     spinButton.style.pointerEvents = 'auto';
  //     wheel.style.transition = 'none'
  //   })
  // }

  const spinHandler = () => {
    wheelRef.current.spin()
  }

  return (
    <Grid container justifyContent='space-around' alignItems='center' mb={2}>

      <Grid item>
        <Stack spacing={2} alignItems='center'>
          <Wheel ref={wheelRef} />
          <Button
            onClick={spinHandler}
            variant='contained'
            startIcon={<AllOutIcon />}
            sx={{ background: 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))' }}>
            Spin
          </Button>
          {/* <SpinButton /> */}
        </Stack>
      </Grid>

      <Grid item>
        <BetCard />
      </Grid>

    </Grid>
  )
}

export default WheelContainer