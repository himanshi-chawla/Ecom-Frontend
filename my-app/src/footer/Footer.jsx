import react from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@headlessui/react';
import { Grid2 } from '@mui/material';

const Footer = ()=>{
    return (
        <div>
            <Grid2 className='bg-black text-white text-center mt-10'
            container
            sx={{bgcolor: "black", color: "white"}}
            >
                <Grid2 item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Company </Typography>
                    <Button className='pb-5' variant='h6'> About </Button>
                    <br />
                    <Button className='pb-5' variant='h6'> Blog </Button>
                    <br />

                    <Button className='pb-5' variant='h6'> Jobs </Button>
                    <br />

                    <Button className='pb-5' variant='h6'> Partners </Button>


                </Grid2>

            </Grid2>
        </div>
    )
}

export default Footer