import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {fetchVendorsList} from '../../gate';
import * as actionCreators from '../actions/vendors';
import * as actionTypes from '../actionTypes/vendors.actionTypes';

function* getVendorsSaga({page}: actionTypes.GetVendorsRequestAction) {
  try {
    const {data} = yield call(fetchVendorsList, page);
    yield put(actionCreators.getVendorsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getVendorsFailure(error as Error));
  }
}

export default function* vendorsSaga() {
  yield all([takeLatest(actionTypes.GET_VENDORS_REQUEST, getVendorsSaga)]);
}
