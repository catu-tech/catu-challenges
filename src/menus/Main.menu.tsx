import {
  HomeTwoTone,
  RefreshTwoTone,
  TableViewTwoTone
} from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';

const MainMenu = (
  <>
    <ListItemButton component={Link} href={'/'}>
      <ListItemIcon>
        <HomeTwoTone />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton component={Link} href={'/exercicios/01-fetch'}>
      <ListItemIcon>
        <RefreshTwoTone />
      </ListItemIcon>
      <ListItemText primary="Usando Fetch" />
    </ListItemButton>
    <ListItemButton component={Link} href={'/exercicios/02-sort-table'}>
      <ListItemIcon>
        <TableViewTwoTone />
      </ListItemIcon>
      <ListItemText primary="Ordenando Tabelas" />
    </ListItemButton>
  </>
);

export default MainMenu;
