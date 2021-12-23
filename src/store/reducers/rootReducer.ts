import {combineReducers, Reducer} from 'redux';
import vendorsReducer from './vendorsReducer';

export interface RootState {
  vendorsStore: ReturnType<typeof vendorsReducer>;
}

export const rootReducer: Reducer<RootState, any> = (root, action) => {
  return {
    vendorsStore: vendorsReducer(root?.vendorsStore, action),
  };
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
