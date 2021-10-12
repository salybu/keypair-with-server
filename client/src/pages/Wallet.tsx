import { Container, Box, Stack, Typography } from '@mui/material';
import { Nav } from 'components';
import { Select, WalletTab } from 'components/wallet';
import { useWalletTab, WalletTabPanel } from 'components/wallet';

const COIN_OPTIONS = [
  { value: 'ETH', label: '이더리움 (ETH)' },
  { value: 'BTC', label: '비트코인 (BTC)' },
  { value: 'DOGE', label: '도지코인 (DOGE)' },
];

const WALLET_OPTIONS = [
  { value: 'develop', label: '개발팀 이더 지갑' },
  { value: 'manage', label: '운영팀 이더 지갑' },
];

const ACCOUNT_OPTIONS = [
  { value: 'service', label: '서비스 수수료 계좌 - 0x138a7204b67D0227d92B11Ee432ce0577C2b0733' },
  { value: 'private', label: '개인 계좌 - 0x920a5317b67D0227d92B11Ee432ce0577C2b0733' },
];

const Wallet = (): JSX.Element => {
  const { tab, handleChange } = useWalletTab();

  return (
    <Stack direction='row'>
      <Nav />
      <Box sx={{ width: '82.2%', minWidth: 1184, margin: '32px 0 0 24px' }}>
        <Box sx={{ width: '95.6%', minWidth: 1132, height: 148, border: '1px solid #e5e5e5', padding: '32px 46px 36px 46px' }}>
          <Stack direction='row' justifyContent='space-between'>
            <Typography component='h2' sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: 18 }}>
              지갑
            </Typography>
            <Typography>₩ 3,876,000,000</Typography>
          </Stack>
          <Stack direction='row' sx={{ marginTop: '16px' }}>
            <Select options={COIN_OPTIONS} />
            <Select options={WALLET_OPTIONS} />
            <Typography sx={{ color: '#676767', fontFamily: 'Roboto', fontWeight: 500, fontSize: 18, marginLeft: 'auto' }}>93.6135265700483212 ETH</Typography>
          </Stack>
        </Box>
        <Box sx={{ width: '95.6%', minWidth: 1132, height: 202, marginTop: '20px', border: '1px solid #e5e5e5', padding: '32px 46px 36px 46px' }}>
          <Stack direction='row' justifyContent='space-between'>
            <Typography component='h2' sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: 18 }}>
              계좌
            </Typography>
            <Typography>₩ 969,000,000</Typography>
          </Stack>
          <Stack direction='row' sx={{ marginTop: '16px' }}>
            <Select options={ACCOUNT_OPTIONS} width='574px' />
            <Typography sx={{ color: '#676767', fontFamily: 'Roboto', fontWeight: 500, fontSize: 18, marginLeft: 'auto' }}>23.4033816425120770 ETH</Typography>
          </Stack>
          <WalletTab tab={tab} handleChange={handleChange} />
        </Box>
        <WalletTabPanel value={tab} index={0}>
          거래내역
        </WalletTabPanel>
        <WalletTabPanel value={tab} index={1}>
          송금
        </WalletTabPanel>
        <WalletTabPanel value={tab} index={2}>
          설정
        </WalletTabPanel>
        <WalletTabPanel value={tab} index={3}>
          정책
        </WalletTabPanel>
      </Box>
    </Stack>
  );
};

export default Wallet;
