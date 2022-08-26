import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ButtonsBox } from '../styles/styles-sx';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Box sx={ButtonsBox(true)}>
        <Link href={'/form'}>
          <Button variant='contained'>a4</Button>
        </Link>
        <Button variant='contained'>a5</Button>
        <Button variant='contained'>a6</Button>
      </Box>
      <Component {...pageProps} />
      <Box sx={ButtonsBox(false)}>
        <Link href={'/list'}>
          <Button variant='contained' sx={{ width: '90%' }}>
            mostrar lista
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default MyApp;
