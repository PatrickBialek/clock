import { combineReducers } from "redux";

import clockReducer from "./clock/clock-reducers";

const rootReducer = combineReducers({
  clock: clockReducer,
});

export default rootReducer;
