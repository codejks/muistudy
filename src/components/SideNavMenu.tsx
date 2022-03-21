import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { styled } from '@mui/material/styles';
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LayersIcon from '@mui/icons-material/Layers';

type Anchor = 'left';
const drawerWidth = 300;

export default function SideNavMenu() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }));

  const list = (anchor: Anchor) => (
    <Box
      sx={{width:drawerWidth}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Military-Symbol', 'situation-diagram', 'transparency'].map((text, index) => (
          <Link href={`${text}`} underline='none'>
            <ListItem button key={text}>
                <ListItemIcon>
                {index === 0 ? <HomeIcon /> : index === 1 ? <EmojiSymbolsIcon/> : index === 2 ? <MapIcon/> : <LayersIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
    <div style={{display:'plex', position:'fixed' }}>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><ArrowRightIcon fontSize='large' color='action' style={{border:'1px solid gray', borderRadius:'5px' }}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <DrawerHeader>
                <Grid container style={{marginLeft:'10px'}}>
                    <h2>Menu</h2>
                </Grid>
            <Button onClick={toggleDrawer(anchor, false)}><ArrowLeftIcon fontSize='large' color='action' style={{border:'1px solid gray', borderRadius:'5px'}}/></Button>
            </DrawerHeader>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </>
  );
}