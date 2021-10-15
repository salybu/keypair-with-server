import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { IAccountInfo, IAccountState, IWalletAccount, RootState } from 'types';
import { walletApi } from 'apis';

const initialState: IAccountState = {
  account: null,
  loading: false,
  error: null,
};

const prefix = 'keypair-with-server/account';

export const { pending, success, fail } = createActions('PENDING', 'SUCCESS', 'FAIL', { prefix });

const reducer = handleActions<IAccountState, IAccountInfo>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      loading: false,
      account: action.payload,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

export const selectAccount = (state: RootState): IAccountState => state.account;

// saga
export const { getAccount } = createActions('GET_ACCOUNT', { prefix });

function* getAccountSaga(action: Action<IWalletAccount>) {
  try {
    yield put(pending());
    const res: IAccountInfo = yield call(walletApi.getWalletAccount, action.payload);
    yield put(success(res));
  } catch {}
}

export function* accountSaga() {
  yield takeEvery(`${prefix}/GET_ACCOUNT`, getAccountSaga);
}
