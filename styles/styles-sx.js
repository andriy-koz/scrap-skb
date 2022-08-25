import { blue } from '@mui/material/colors';

export const ButtonsBox = top => {
  const position = top ? 'top' : 'bottom';
  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: blue[100],
    position: 'fixed',
    [position]: 0,
  };
};
