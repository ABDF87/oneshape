import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';

type Props = {
  setDeployedMenu: (value: boolean) => void;
  deployedMenu: boolean;
};
type Anchor = 'right';

const MobileMenu = ({ setDeployedMenu, deployedMenu }: Props) => {
  const [state, setState] = useState({ right: false });
  const [isHovered, setIsHovered] = useState('');

  useEffect(() => {
    if (deployedMenu) {
      setState({ right: true });
    }
  }, [deployedMenu]);

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

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#000',
        fontFamily: 'Montserrat',
        color: '#fff',
        height: '100vh',
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        {['Головна', 'Масаж', 'Манікюр', 'Навчання', 'Контакти'].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={
                isHovered === text
                  ? {
                      backgroundColor: '#eee',
                      color: '#000',
                      borderBottom: '1px solid #eee',
                    }
                  : {
                      backgroundColor: '#000',
                      width: '100%',
                      borderBottom: '1px solid #eee',
                    }
              }
              onMouseEnter={() => setIsHovered(text)}
              onMouseLeave={() => setIsHovered('')}
            >
              <ListItemButton>
                <Link
                  scroll={false}
                  href={
                    text === 'Головна'
                      ? `/`
                      : text === 'Масаж'
                      ? '/massage'
                      : text === 'Манікюр'
                      ? '/manicure'
                      : text === 'Навчання'
                      ? '/courses/massage'
                      : '/contact'
                  }
                >
                <ListItemText primary={text} />
                </Link>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={()=>setDeployedMenu(false)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileMenu;
