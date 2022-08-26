import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ height: '60vh', display: 'grid', placeContent: 'center' }}>
      <Typography variant='h5' component='h1'>
        Seleccioná un modelo!
      </Typography>
    </Box>
  );
}
