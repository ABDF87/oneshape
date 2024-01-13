import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  setDeployedMenu: (value: boolean) => void;
  deployedMenu: boolean;
};
type Anchor = 'right';

const MobileMenu = ({ setDeployedMenu, deployedMenu }: Props) => {
  const [state, setState] = useState({ right: false });
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const path = usePathname();
  useEffect(() => {
    setActiveMenuItem(path);
  }, [path]);

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
        backgroundColor: '#323131',
        fontFamily: 'Montserrat',
        color: '#fff',
        height: '100vh',
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        {['Головна', 'Ціни', 'Масаж', 'Манікюр', 'Навчання', 'Контакти'].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={
                activeMenuItem === '/' && text === 'Головна'
                  ? { backgroundColor: '#000' }
                  : activeMenuItem === '/prices' && text === 'Ціни'
                  ? { backgroundColor: '#000' }
                  : activeMenuItem === '/massage' && text === 'Масаж'
                  ? { backgroundColor: '#000' }
                  : activeMenuItem === '/manicure' && text === 'Манікюр'
                  ? { backgroundColor: '#000' }
                  : activeMenuItem === '/courses/massage' && text === 'Навчання'
                  ? { backgroundColor: '#000' }
                  : activeMenuItem === '/contact' && text === 'Контакти'
                  ? { backgroundColor: '#000' }
                  : {
                      backgroundColor: '#323131',
                      width: '100%',
                      borderBottom: '1px solid #000',
                    }
              }
            >
              <ListItemButton>
                <Link
                  scroll={false}
                  href={
                    text === 'Головна'
                      ? `/`
                      : text === 'Ціни'
                      ? '/prices'
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
