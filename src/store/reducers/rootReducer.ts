import { combineReducers } from "redux";

const rootReducer = combineReducers({
  //   my:my_reducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
