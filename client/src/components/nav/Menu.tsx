import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const Menu = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  const handleListItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 256 }}>
      <List component='nav' aria-label='cilo custody service dashboard'>
        <ListItemButton selected={selectedIndex === 0} onClick={(e) => handleListItemClick(e, 0)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='대쉬보드' sx={{ '& MuiTypography-root': { fontFamily: 'Roboto' } }} />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 1} onClick={(e) => handleListItemClick(e, 1)}>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary='지갑' />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 2} onClick={(e) => handleListItemClick(e, 2)}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary='프로파일' />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 3} onClick={(e) => handleListItemClick(e, 3)}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary='설정' />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default React.memo(Menu);
