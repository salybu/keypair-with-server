import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({});

export default rootReducer;

export function* rootSaga() {
  yield all([]);
}
