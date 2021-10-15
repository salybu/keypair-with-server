import React, { ReactNode } from 'react';
import { Box, SelectChangeEvent, Stack, Typography, styled } from '@mui/material';
import { Select } from 'components/wallet';
import { FiatTypo, CryptoTypo } from 'styles/common';
import { ISelectItem } from 'types';

const WalletBoxContainer = styled(Box)(({ theme }) => ({
  width: '95.6%',
  minWidth: 1132,
  height: 148,
  border: `1px solid ${theme.palette.grey[100]}`,
  padding: '32px 46px 36px 46px',
}));

interface IWalletBox {
  userCryptos: ISelectItem[];
  userWallets: ISelectItem[];
  selectedCrypto: string;
  selectedWallet: string;
  setSelectedCrypto: React.Dispatch<React.SetStateAction<string>>;
  setSelectedWallet: React.Dispatch<React.SetStateAction<string>>;
  handleCryptoSelect: (e: SelectChangeEvent<unknown>, child: ReactNode) => void;
  handleWalletSelect: (e: SelectChangeEvent<unknown>, child: ReactNode) => void;
}

const WalletBox = ({
  userCryptos,
  userWallets,
  selectedCrypto,
  selectedWallet,
  setSelectedCrypto,
  setSelectedWallet,
  handleCryptoSelect,
  handleWalletSelect,
}: IWalletBox): JSX.Element => {
  return (
    <WalletBoxContainer>
      <Stack direction='row' justifyContent='space-between'>
        <Typography component='h2' variant='h2'>
          지갑
        </Typography>
        <FiatTypo variant='h2'>₩ 0,000,000,000</FiatTypo>
      </Stack>
      <Stack direction='row' sx={{ marginTop: '16px' }}>
        <Select options={userCryptos} selected={selectedCrypto} handleChange={handleCryptoSelect} setSelected={setSelectedCrypto} />
        <Select options={userWallets} selected={selectedWallet} handleChange={handleWalletSelect} setSelected={setSelectedWallet} />
        <CryptoTypo variant='h2'>00.0000000000000000 ETH</CryptoTypo>
      </Stack>
    </WalletBoxContainer>
  );
};

export default React.memo(WalletBox);
