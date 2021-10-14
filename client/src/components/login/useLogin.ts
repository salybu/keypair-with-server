import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginSagaStart } from 'modules/token';
import { ILogin } from 'types';

const initialLogin: ILogin = {
  userName: '',
  password: '',
};

const useLogin = () => {
  const [values, setValues] = useState<ILogin>(initialLogin);
  const dispatch = useDispatch();

  const handleChange = (prop: keyof ILogin) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(loginSagaStart(values));
  };

  return { values, handleChange, handleLogin };
};

export default useLogin;
