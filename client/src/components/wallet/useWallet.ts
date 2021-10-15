import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material';
import { selectToken } from 'modules/token';
import { getUser, selectUser } from 'modules/user';
import { getAccount, selectAccount } from 'modules/account';
import { getDate } from 'utils/date';
import {
  CryptoType,
  IAccountInfo,
  IAccountState,
  IAssestsString,
  IAsset,
  IAvatar,
  ISelectItem,
  ITokenState,
  ITransActionForTable,
  IUserInfo,
  IUserState,
  RootState,
  StatusDirection,
  StatusTransaction,
} from 'types';

const useWallet = () => {
  const { token, userName } = useSelector<RootState, ITokenState>(selectToken);
  const { user } = useSelector<RootState, IUserState>(selectUser);
  const { account } = useSelector<RootState, IAccountState>(selectAccount);

  const [userInfo, setUserInfo] = useState<IAvatar>();

  const [userCryptos, setUserCryptos] = useState<ISelectItem[]>([]);
  const [userWallets, setUserWallets] = useState<ISelectItem[]>([]);
  const [userAccounts, setUserAccounts] = useState<ISelectItem[]>([]);

  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [selectedAccount, setSelectedAccount] = useState<string>('');

  const [accountBalance, setAccountBalance] = useState<IAssestsString>();

  const [transactions, setTransactions] = useState<ITransActionForTable[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ token, userName }));
  }, []);

  useEffect(() => {
    if (user !== null && user !== undefined) {
      getUserInfo(user);
      getUserCrypto(user);
    }
  }, [user]);

  const getUserInfo = (user: IUserInfo): void => {
    setUserInfo({ name: user.lastName + user.firstName, profileImg: user.profileImg });
  };

  const getUserCrypto = (user: IUserInfo): void => {
    const userCryptoType = user?.wallets.map((wallet) => wallet.cryptoType);
    const userCryptos = userCryptoType
      ?.filter((crypto, idx) => userCryptoType.indexOf(crypto) === idx)
      .map((crypto) => ({ value: crypto, label: (<any>CryptoType)[crypto] }));
    setUserCryptos(userCryptos);
  };

  useEffect(() => {
    getUserCryptoWallet(user!);
  }, [selectedCrypto]);

  const getUserCryptoWallet = (user: IUserInfo): void => {
    const userWallets = user?.wallets
      .filter((wallet) => wallet.cryptoType == selectedCrypto)
      .map((wallet, idx) => ({ value: idx.toString(), label: wallet.nickname }));
    setUserWallets(userWallets);
  };

  useEffect(() => {
    dispatch(getAccount({ walletId: user?.wallets[0].id!, accountId: user?.wallets[0].accountIds[0]!, token: token! }));
  }, [selectedWallet]);

  useEffect(() => {
    if (account !== null && account !== undefined) {
      getUserAccount(account);
      getAccountBalance(account);
      getTransActions(account);
      // console.log(account);
    }
  }, [account]);

  const getUserAccount = (account: IAccountInfo): void => {
    const selects = [{ label: account?.nickname + ' - ' + account?.address, value: 'a' }];
    setUserAccounts(selects);
  };

  const getAccountBalance = (account: IAccountInfo): void => {
    const cryptoBal = getBalanceString(account?.balance.crypto);
    const krwBal = getBalanceString(account?.balance.fiat);
    setAccountBalance({ crypto: cryptoBal, fiat: krwBal });
  };

  const getBalanceString = (asset: IAsset): string => {
    const { unit, amount } = asset;
    const balance: string = unit == 'krw' ? '₩ ' + amount.toLocaleString() : amount + ' ' + unit.toUpperCase();
    return balance;
  };

  const getTransActions = (account: IAccountInfo) => {
    const { transactions } = account;
    const transactionsForTable = transactions.map((transaction) => ({
      date: getDate(new Date(transaction.date)),
      type: (<any>StatusDirection)[transaction.direction],
      address: transaction.txId,
      status: (<any>StatusTransaction)[transaction.status],
      amount: getBalanceString(transaction.value.crypto),
      price: getBalanceString(transaction.value.fiat),
    }));
    setTransactions(transactionsForTable);
  };

  const handleCryptoSelect = (e: SelectChangeEvent<unknown>, child: ReactNode) => {
    setSelectedCrypto(e.target.value as string);
  };

  const handleWalletSelect = (e: SelectChangeEvent<unknown>, child: ReactNode) => {
    setSelectedWallet(e.target.value as string);
  };

  const handleAccountSelect = (e: SelectChangeEvent<unknown>, child: ReactNode) => {
    setSelectedAccount(e.target.value as string);
  };

  return {
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
  };
};

export default useWallet;
