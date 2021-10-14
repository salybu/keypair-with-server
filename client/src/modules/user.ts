import { Action, createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { IUserInfo, IUserState, IUserToken, RootState } from 'types';
import { userApi } from 'apis';

const initialState: IUserState = {
  user: null,
  loading: false,
  error: null,
};

const prefix = 'keypair-with-server/user';

export const { pending, success, fail } = createActions('PENDING', 'SUCCESS', 'FAIL', { prefix });

const reducer = handleActions<IUserState, IUserInfo>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      loading: false,
      error: null,
      user: action.payload,
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

export const selectUser = (state: RootState): IUserState => state.user;

// saga
export const { getUser } = createActions('GET_USER', { prefix });

function* getUserSaga(action: Action<IUserToken>) {
  try {
    yield put(pending());
    const res: IUserInfo = yield call(userApi.getUserByName, action.payload);
    yield put(success(res));
  } catch {}
}

export function* userSaga() {
  yield takeEvery(`${prefix}/GET_USER`, getUserSaga);
}
