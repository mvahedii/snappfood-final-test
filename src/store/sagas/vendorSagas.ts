import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {Restaurant, VendorsApiResults} from '../../types/vendorsApiResults';
import {fetchVendorsList} from '../../gate';
import * as actionCreators from '../actions/vendors';
import * as actionTypes from '../actionTypes/vendors.actionTypes';

function* getVendorsSaga({page}: actionTypes.GetVendorsRequestAction) {
  try {
    const data: VendorsApiResults = yield call(fetchVendorsList, page);
    const restaurants = data.data.finalResult
      .slice(1)
      .map((item) => item.data) as Restaurant[];
    yield put(
      actionCreators.getVendorsSuccess({
        restaurants: restaurants,
        totalNumberOfVendors: data.data.count,
        openCount: data.data.open_count,
      }),
    );
  } catch (error) {
    yield put(actionCreators.getVendorsFailure(error as Error));
  }
}

export default function* vendorsSaga() {
  yield all([takeLatest(actionTypes.GET_VENDORS_REQUEST, getVendorsSaga)]);
}
