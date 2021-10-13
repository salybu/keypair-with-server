import axios from 'axios';
import { ILogin } from 'types';

export default class userApi {
  public static async login({ userName, password }: ILogin) {
    try {
      const response = await axios.post(`/user/login`, { userName, password }, { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } });
      if (response.status == 200) {
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
