import React from 'react'
import AllOutIcon from '@mui/icons-material/AllOut';
import { Button } from '@mui/material';

const SpinButton = ({spinClickHandler}) => {
    return (
        <>
            <Button
                className='spinButton'
                onClick={spinClickHandler}
                variant='contained'
                startIcon={<AllOutIcon />}
                sx={{ background: 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))' }}>
                Spin
            </Button>
        </>
    )
}

export default SpinButton