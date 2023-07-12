import {
  Box,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  List,
  styled,
  Toolbar,
  Typography
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import MainMenu from '@/menus/Main.menu';
import { ReactNode, useEffect, useState } from 'react';
import {
  ChevronLeftTwoTone,
  MenuTwoTone,
  PersonTwoTone
} from '@mui/icons-material';

const DRAWER_WIDTH: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    maxHeight: '100vh',
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7)
      }
    })
  }
}));

const CatuLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  function checkMobile() {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    if (true === mobile) {
      setOpen(false);
    }
  }, [mobile]);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position={'absolute'} open={open}>
        <Toolbar>
          <IconButton
            edge={'start'}
            color={'inherit'}
            aria-label={'open drawer'}
            onClick={toggleDrawer}
            sx={{
              marginRight: 3,
              ...(open && { display: 'none' })
            }}
          >
            <MenuTwoTone />
          </IconButton>
          <Typography
            component={'h1'}
            variant={'h6'}
            color={'inherit'}
            noWrap
            sx={{ fontFamily: 'Monument Extended', flexGrow: 1 }}
          >
            Catu : Front End Exercises
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant={'permanent'} open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1]
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftTwoTone />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component={'nav'}>{MainMenu}</List>
      </Drawer>

      <Box
        component={'main'}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar />

        <Container maxWidth={'lg'} sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default CatuLayout;
