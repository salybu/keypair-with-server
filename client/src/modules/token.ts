import { Action, createActions, handleActions } from 'redux-actions';
import { call, getContext, put, takeEvery } from '@redux-saga/core/effects';
import { History } from 'history';
import { ILogin, ILoginOutput, ITokenState, IUserToken, RootState } from 'types';
import { userApi } from 'apis';

const initialState: ITokenState = {
  token: null,
  userName: null,
  loading: false,
  error: null,
};

const prefix = 'keypair-with-server/token';

export const { pending, success, fail } = createActions('PENDING', 'SUCCESS', 'FAIL', { prefix });

const reducer = handleActions<ITokenState, IUserToken>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => {
      const { token, userName } = action.payload;
      return { ...state, loading: false, token, userName, error: null };
    },
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

export const selectToken = (state: RootState): ITokenState => state.token;

// saga
export const { login } = createActions('LOGIN', { prefix });

function* loginSaga(action: Action<ILogin>) {
  try {
    yield put(pending());
    const res: ILoginOutput = yield call(userApi.login, action.payload);
    const params = { token: res.accessToken, userName: action.payload.userName };
    yield put(success(params));
    const history: History = yield getContext('history');
    history.push('/wallet');
  } catch (error: any) {
    // yield put(fail(new Error(error.response.data.error || 'UNKNOWN_ERROR')));
  }
}

export function* tokenSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
}
