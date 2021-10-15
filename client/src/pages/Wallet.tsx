import { Container, Box, Stack, styled } from '@mui/material';
import { Nav } from 'components';
import { useWallet, WalletBox, AccountBox, useWalletTab, WalletTabPanel } from 'components/wallet';

const ContentsBox = styled(Box)(({ theme }) => ({
  width: '82.2%',
  minWidth: 1184,
  margin: '32px 0 0 24px',
}));

const Wallet = (): JSX.Element => {
  const { tab, handleChange } = useWalletTab();
  const {
    userInfo,
    userCryptos,
    userWallets,
    userAccounts,
    selectedCrypto,
    selectedWallet,
    selectedAccount,
    accountBalance,
    transactions,
    setSelectedCrypto,
    setSelectedWallet,
    setSelectedAccount,
    handleCryptoSelect,
    handleWalletSelect,
    handleAccountSelect,
  } = useWallet();

  return (
    <Stack direction='row'>
      <Nav name={userInfo?.name} profileImg={userInfo?.profileImg} />
      <ContentsBox>
        <WalletBox
          userCryptos={userCryptos}
          userWallets={userWallets}
          selectedCrypto={selectedCrypto}
          selectedWallet={selectedWallet}
          setSelectedCrypto={setSelectedCrypto}
          setSelectedWallet={setSelectedWallet}
          handleCryptoSelect={handleCryptoSelect}
          handleWalletSelect={handleWalletSelect}
        />
        <AccountBox
          tab={tab}
          handleChange={handleChange}
          userAccounts={userAccounts}
          selectedAccount={selectedAccount}
          accountBalance={accountBalance}
          setSelectedAccount={setSelectedAccount}
          handleAccountSelect={handleAccountSelect}
        />
        <WalletTabPanel value={tab} rows={transactions} index={0}>
          거래내역
        </WalletTabPanel>
        <WalletTabPanel value={tab} rows={transactions} index={1}>
          송금
        </WalletTabPanel>
        <WalletTabPanel value={tab} rows={transactions} index={2}>
          설정
        </WalletTabPanel>
        <WalletTabPanel value={tab} rows={transactions} index={3}>
          정책
        </WalletTabPanel>
      </ContentsBox>
    </Stack>
  );
};

export default Wallet;
