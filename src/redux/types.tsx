export type StateType = {
  clock: {
    currentTime: string;
  };
};

export type StoreType = {
  rootReducer: any;
  composeWithDevTool: () => void;
};
