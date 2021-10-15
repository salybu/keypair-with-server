import React, { ReactNode } from 'react';
import { Box, SelectChangeEvent, Stack, styled, Typography } from '@mui/material';
import { Select, WalletTab } from 'components/wallet';
import { FiatTypo, CryptoTypo } from 'styles/common';
import { IAssestsString, ISelectItem } from 'types';

const AccountBoxContainer = styled(Box)(({ theme }) => ({
  width: '95.6%',
  minWidth: 1132,
  height: 202,
  marginTop: '20px',
  border: `1px solid ${theme.palette.grey[100]}`,
  padding: '32px 46px 36px 46px',
}));

interface IAccountBox {
  tab: number;
  accountBalance: IAssestsString | undefined;
  userAccounts: ISelectItem[];
  selectedAccount: string;
  setSelectedAccount: React.Dispatch<React.SetStateAction<string>>;
  handleAccountSelect: (e: SelectChangeEvent<unknown>, child: ReactNode) => void;
  handleChange: (e: React.SyntheticEvent, newTab: number) => void;
}

const AccountBox = ({
  tab,
  handleChange,
  userAccounts,
  selectedAccount,
  accountBalance,
  setSelectedAccount,
  handleAccountSelect,
}: IAccountBox): JSX.Element => {
  return (
    <AccountBoxContainer>
      <Stack direction='row' justifyContent='space-between'>
        <Typography component='h2' variant='h2'>
          계좌
        </Typography>
        <FiatTypo variant='h2'>{accountBalance?.fiat}</FiatTypo>
      </Stack>
      <Stack direction='row' sx={{ marginTop: '16px' }}>
        <Select options={userAccounts} width='574px' selected={selectedAccount} handleChange={handleAccountSelect} setSelected={setSelectedAccount} />
        <CryptoTypo variant='h2'>{accountBalance?.crypto}</CryptoTypo>
      </Stack>
      <WalletTab tab={tab} handleChange={handleChange} />
    </AccountBoxContainer>
  );
};

export default React.memo(AccountBox);
