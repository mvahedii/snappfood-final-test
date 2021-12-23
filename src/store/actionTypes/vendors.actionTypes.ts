import { Restaurant } from "../../types/VendorsApiResults";

export enum ACTION_TYPE {
  GET_VENDORS_REQUEST = "GET_VENDORS_REQUEST",
  GET_VENDORS_SUCCESS = "GET_VENDORS_SUCCESS",
  GET_VENDORS_FAILURE = "GET_VENDORS_FAILURE",
}

export const GET_VENDORS_REQUEST = ACTION_TYPE.GET_VENDORS_REQUEST;
export interface GetVendorsRequestAction {
  type: typeof GET_VENDORS_REQUEST;
  page: number;
}

export const GET_VENDORS_SUCCESS = ACTION_TYPE.GET_VENDORS_SUCCESS;
export interface GetVendorsSuccessAction {
  type: typeof GET_VENDORS_SUCCESS;
  data: { totalNumberOfVendors: number; restaurants: Restaurant[] };
}

export const GET_VENDORS_FAILURE = ACTION_TYPE.GET_VENDORS_FAILURE;
export interface GetVendorsFailureAction {
  type: typeof GET_VENDORS_FAILURE;
  error: Error | string;
}

export type VendorsAction =
  | GetVendorsRequestAction
  | GetVendorsSuccessAction
  | GetVendorsFailureAction;
