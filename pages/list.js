import Link from 'next/link';
import {
  Box,
  List,
  Button,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonsBox } from '../styles/styles-sx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PartsList = () => {
  return (
    <Box
      sx={{
        paddingTop: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box sx={ButtonsBox(true)}>
        <Link href={'/'}>
          <Button variant='contained'>
            <ArrowBackIcon />
            VOLVER
          </Button>
        </Link>
      </Box>
      <List
        sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '80%' }}
        dense={false}>
        <ListItem
          secondaryAction={
            <IconButton edge='end' aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Single-line item' />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge='end' aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Single-line item' />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge='end' aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Single-line item' />
        </ListItem>
      </List>
      <Box sx={ButtonsBox(false)}>
        <Button variant='outlined'>Borrar todo</Button>
        <Button variant='contained'>Exportar</Button>
      </Box>
    </Box>
  );
};

export default PartsList;
