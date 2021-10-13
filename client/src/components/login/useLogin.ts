import React, { useState } from 'react';
import userApi from 'apis/userApi';
import { ILogin } from 'types';

const initialLogin: ILogin = {
  userName: '',
  password: '',
};

const useLogin = () => {
  const [values, setValues] = useState<ILogin>(initialLogin);

  const handleChange = (prop: keyof ILogin) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    userApi.login(values);
    console.log('userApi login');
  };

  return { values, handleChange, handleLogin };
};

export default useLogin;
