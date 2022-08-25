import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ButtonsBox } from '../styles/styles-sx';
import { Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box sx={{ height: '60vh', display: 'grid', placeContent: 'center' }}>
      <Box sx={ButtonsBox(true)}>
        <Link href={'/form'}>
          <Button variant='contained'>a4</Button>
        </Link>
        <Button variant='contained'>a5</Button>
        <Button variant='contained'>a6</Button>
      </Box>
      <Typography variant='h5' component='h1'>
        Seleccioná un modelo!
      </Typography>
      <Box sx={ButtonsBox(false)}>
        <Link href={'/list'}>
          <Button variant='contained' sx={{ width: '90%' }}>
            mostrar lista
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
