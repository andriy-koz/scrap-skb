import { Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { blue } from '@mui/material/colors';

const Form = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography variant='h4' component='h2' sx={{ color: blue[800] }}>
        A4 - T281BX
      </Typography>
      <Autocomplete
        disablePortal
        options={[
          { label: 'HOLA', id: 1 },
          { label: 'CHAU', id: 2 },
        ]}
        sx={{ width: '80%', marginTop: 5 }}
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 12,
        }}>
        <Button variant='outlined'>cancelar</Button>
        <Button variant='contained'>guardar</Button>
      </Box>
    </Box>
  );
};

export default Form;
