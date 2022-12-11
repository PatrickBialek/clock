import * as clockTypes from "./clock-types";
import { InitialStateType, SetCurrentTimeActionType } from "./types";

const INITIAL_STATE = {
  currentTime: "",
};

const clockReducer = (
  state: InitialStateType = INITIAL_STATE,
  action: SetCurrentTimeActionType
) => {
  switch (action.type) {
    case clockTypes.SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload.currentTime,
      };
    default:
      return state;
  }
};

export default clockReducer;
