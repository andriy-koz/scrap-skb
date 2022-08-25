import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ButtonsBox } from '../styles/styles-sx';
import { blue } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Form = () => {
  return (
    <Box
      sx={{
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box sx={ButtonsBox(true)}>
        <Button>
          <ArrowBackIcon />
          volver
        </Button>
        <Button>a5</Button>
        <Button>a6</Button>
      </Box>
      <Autocomplete
        disablePortal
        options={[
          { label: 'HOLA', id: 1 },
          { label: 'CHAU', id: 2 },
        ]}
        sx={{ width: '80%', marginTop: 12 }}
        renderInput={params => (
          <TextField {...params} label='Nombre de pieza' />
        )}
      />
      <Typography variant='h5' component='h3' sx={{ marginTop: 6 }}>
        HOLA
      </Typography>
      <Typography variant='h6' component='p'>
        1234
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 4,
        }}>
        <Button variant='contained'>-</Button>
        <TextField
          sx={{ width: 95 }}
          variant='outlined'
          label='Cantidad'
          type='number'
        />
        <Button variant='contained'>+</Button>
      </Box>
      <Box sx={ButtonsBox(false)}>
        <Link href={'/'}>
          <Button variant='outlined'>cancelar</Button>
        </Link>
        <Button variant='contained'>agregar</Button>
      </Box>
    </Box>
  );
};

export default Form;
