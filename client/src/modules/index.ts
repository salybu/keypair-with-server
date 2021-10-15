import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import token, { tokenSaga } from './token';
import user, { userSaga } from './user';
import account, { accountSaga } from './account';

const rootReducer = combineReducers({
  token,
  user,
  account,
});

export default rootReducer;

export function* rootSaga() {
  yield all([tokenSaga(), userSaga(), accountSaga()]);
}
