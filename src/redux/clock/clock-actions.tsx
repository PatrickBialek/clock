import * as clockTypes from "./clock-types";
import { SetCurrentTimeActionType } from "./types";

export const setCurrentTime = (
  currentTime: string
): SetCurrentTimeActionType => {
  return {
    type: clockTypes.SET_CURRENT_TIME,
    payload: {
      currentTime: currentTime,
    },
  };
};
