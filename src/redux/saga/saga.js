import { put, takeEvery, call } from 'redux-saga/effects';
import { showError, fetchTokenSuccess, showList, setSnakbar } from "../actions/action";
import { SET_LOADING, FETCH_TOKEN_GENERATE, SET_USER_DATA } from "../constants/type";
import { fetchData, tokenApi, setUserApi } from './service/userApis';

export function* fetchUserDataSaga() {
  yield takeEvery(SET_LOADING, fetchUserDataWorker);
  yield takeEvery(FETCH_TOKEN_GENERATE, tokenDataWorker);
  yield takeEvery(SET_USER_DATA, setUserDataWorker);
}

function* fetchUserDataWorker() {
  try {
    const response = yield call(fetchData);
    yield put(showList(response.data));
  } catch (error) {
    yield put(showError(error));
  }
}

function* tokenDataWorker(action) {
  try {
    console.log(action.payload);
    const response = yield call(tokenApi, action.payload)
    yield put(setSnakbar(response.data.message))
    yield put(fetchTokenSuccess(response.data))
  } catch (error) {
    yield put(showError(error.response.data.message))
  }
}

function* setUserDataWorker(action) {
  try {
    console.log(action.payload);
    const response = yield call(setUserApi, action.payload)
    console.log(response);
    yield put(setSnakbar(response.data.message))
  } catch (error) {
    yield put(showError(error.response.data.message))
  }
}

export default fetchUserDataSaga;
