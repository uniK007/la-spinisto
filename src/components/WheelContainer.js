import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
import BetCard from './BetCard';
import AllOutIcon from '@mui/icons-material/AllOut';
import Wheel from './Wheel';

const WheelContainer = () => {

  return (
    <Grid container justifyContent='space-around' alignItems='center'>

      <Grid item>
        <Stack spacing={4} sx={{ alignItems: 'center',}}>
          <Wheel />
          <Button
            variant='contained'
            startIcon={<AllOutIcon />}
            sx={{ background:'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))'}}>Spin</Button>
        </Stack>
      </Grid>

      <Grid item>
        <BetCard />
      </Grid>

    </Grid>
  )
}

export default WheelContainer