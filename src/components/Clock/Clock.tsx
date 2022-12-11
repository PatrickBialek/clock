import React, { FC } from "react";
import { connect } from "react-redux";

import { StateType } from "../../redux/types";
import { ClockPropsType } from "./types";

import "./Clock.scss";

const Clock: FC<ClockPropsType> = ({ currentTime, heading }) => {
  return (
    <div className="clock">
      <h2 className="clock-heading">{heading}</h2>
      <span className="clock-counter">{currentTime}</span>
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    currentTime: state.clock.currentTime,
  };
};

export default connect(mapStateToProps)(Clock);
