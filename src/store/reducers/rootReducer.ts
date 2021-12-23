import {combineReducers, Reducer} from 'redux';
import vendorsReducer from './vendorsReducer';

export const rootReducer: Reducer<RootState, any> = (root, action) => {
  return {
    vendorsStore: vendorsReducer(root?.vendorsStore, action),
  };
};

export interface RootState {
  vendorsStore: ReturnType<typeof vendorsReducer>;
}

export default rootReducer;
