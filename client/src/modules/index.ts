import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import token, { tokenSaga } from './token';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  token,
  user,
});

export default rootReducer;

export function* rootSaga() {
  yield all([tokenSaga(), userSaga()]);
}
