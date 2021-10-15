import axios from 'axios';
import { IWalletAccount } from 'types';

export default class walletApi {
  public static async getWalletAccount({ walletId, accountId, token }: IWalletAccount) {
    try {
      const response = await axios.get(`/wallet/${walletId}/accounts/${accountId}`, {
        headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
      });
      if (response.status == 200) {
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
