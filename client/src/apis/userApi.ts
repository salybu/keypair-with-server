import axios from 'axios';
// const USER_API_URL = 'https://localhost:5000';
// const USER_API_URL = 'https://keypair-mock-server.herokuapp.com/';

export default class userApi {
  //   public static async login(reqData: string): Promise<string> {
  public static async login() {
    const data = { userName: 'user1', password: 'aaabbb' };
    // const response = await axios.post(USER_API_URL + `/users`, data);
    // const response = await axios({ method: 'post', url: USER_API_URL + `/users`, headers: {}, data: { userName: 'user1', password: 'aaabbb' } });
    // const response = await axios.get(USER_API_URL + `/users`);
    // const response = await axios.get(`/users`);
    const response = await axios.post(`/user/login`, data);
    // const response = await axios({ method: 'post', url: `/user/login`, headers: {}, data: { userName: 'user1', password: 'aaabbb' } });
    console.log(response.data);

    // return response.data;
  }
}
