import { configureStore } from "@reduxjs/toolkit"
import reducer  from "../redux/reducer/reducer"
import createSagaMiddleware from 'redux-saga';
import fetchUserDataSaga from "../redux/saga/saga"

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(fetchUserDataSaga);
