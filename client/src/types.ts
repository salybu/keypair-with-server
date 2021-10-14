export interface IUserName {
  userName: string;
}

export interface ILogin extends IUserName {
  password: string;
}

export interface ILoginOutput {
  tokenType: string;
  expiresIn: number;
  accessToken: string;
}

export interface RootState {
  token: ITokenState;
  user: IUserState;
}

export interface IApiState {
  loading: boolean;
  error: Error | null;
}

export type ITokenState = IUserToken & IApiState;

export interface IUserToken {
  token: string | null;
  userName: string | null;
}

export interface IUserState extends IApiState {
  user: IUserInfo | null;
}

export enum Status {
  activated = 'activated',
  suspended = 'suspended',
  deactivated = 'deactivated',
}

export interface IUserInfo extends IUserName {
  email: string;
  firstName: string;
  lastName: string;
  status: Status;
  wallets: IWallet[];
}

export interface IWallet {
  accountIds: string[];
  cryptoType: string;
  id: string;
  nickname: string;
  status: Status;
}

export interface IWalletAccount {
  walletId: string;
  accountId: string;
  token: string;
}

export enum CryptoType {
  eth = '이더리움 (ETH)',
  btc = '비트코인 (BTC)',
  doge = '도지코인 (DOGE)',
  klay = '클레이튼 (KLAY)',
}

export interface ISelectItem {
  value: string;
  label: string;
}
