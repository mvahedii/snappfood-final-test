import {Restaurant} from '../../types/VendorsApiResults';
import * as actions from '../actionTypes/vendors.actionTypes';

export interface VendorsState {
  isLoading: boolean;
  error?: Error;
  totalNumberOfVendors: number;
  openCount: number;
  restaurants: {
    [key: string]: Restaurant;
  };
}

const initialState: VendorsState = {
  isLoading: false,
  totalNumberOfVendors: 0,
  openCount: 0,
  restaurants: {},
};

export default function vendorsReducer(
  state: VendorsState = initialState,
  action: actions.VendorsAction,
): VendorsState {
  switch (action.type) {
    case actions.GET_VENDORS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_VENDORS_SUCCESS:
      return {
        ...state,
        totalNumberOfVendors: action.data.totalNumberOfVendors,
        openCount: action.data.openCount,
        restaurants: {
          ...state.restaurants,
          ...action.data.restaurants.reduce(
            (obj, item) => ({...obj, [item.id]: item}),
            {},
          ),
        },
      };
    default:
      return state;
  }
}
