import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';

interface Ia11yProps {
  index: number;
}

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

interface IWalletTab {
  tab: number;
  handleChange: (e: React.SyntheticEvent, newTab: number) => void;
}

const WalletTab = ({ tab, handleChange }: IWalletTab): JSX.Element => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '45px' }}>
      <Tabs value={tab} onChange={handleChange} aria-label='wallet tab'>
        <Tab label='거래내역' {...a11yProps(0)} />
        <Tab label='송금' {...a11yProps(1)} />
        <Tab label='설정' {...a11yProps(2)} />
        <Tab label='정책' {...a11yProps(3)} />
      </Tabs>
    </Box>
  );
};

export default React.memo(WalletTab);
