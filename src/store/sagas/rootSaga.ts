import {all, fork} from 'redux-saga/effects';
import vendorsSaga from './vendorSagas';

export function* rootSaga() {
  yield all([fork(vendorsSaga)]);
}
