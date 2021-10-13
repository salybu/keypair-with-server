import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import token, { tokenSaga } from './token';

const rootReducer = combineReducers({
  token,
});

export default rootReducer;

export function* rootSaga() {
  yield all([tokenSaga()]);
}
