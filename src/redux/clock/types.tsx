export type PayloadType = {
  currentTime: string;
};

export type SetCurrentTimeActionType = {
  type: string;
  payload: PayloadType;
};

export type InitialStateType = {
  currentTime: string;
};
