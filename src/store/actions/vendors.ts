import * as actions from "../actionTypes/vendors.actionTypes";
import { Restaurant } from "../../types/VendorsApiResults";

export const getVendors = (page: number): actions.GetVendorsRequestAction => {
  return {
    type: actions.GET_VENDORS_REQUEST,
    page,
  };
};

export const getVendorsSuccess = (data: {
  totalNumberOfVendors: number;
  restaurants: Restaurant[];
  openCount:number;
}): actions.GetVendorsSuccessAction => {
  return {
    type: actions.GET_VENDORS_SUCCESS,
    data,
  };
};

export function getVendorsFailure(
  error: Error | string
): actions.GetVendorsFailureAction {
  return {
    type: actions.GET_VENDORS_FAILURE,
    error,
  };
}
