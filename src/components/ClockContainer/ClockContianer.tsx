import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";

import { setCurrentTime } from "../../redux/clock/clock-actions";
import { FormatedClockItem, ClockContainerPropTypes } from "./types";
import Clock from "../Clock";

import "./ClockContainer.scss";

const ClockContainer: FC<ClockContainerPropTypes> = ({ setCurrentTime }) => {
  const [time, setTime] = useState("");
  const heading: string = "Awesome Clock:";

  useEffect(() => {
    const update = (): void => {
      const date: Date = new Date();

      const hours: number = date.getHours();
      const minutes: number = date.getMinutes();
      const seconds: number = date.getSeconds();

      const formatedHours: FormatedClockItem =
        hours >= 10 ? hours : `0${hours}`;
      const formatedMinutes: FormatedClockItem =
        minutes >= 10 ? minutes : `0${minutes}`;
      const formatedSeconds: FormatedClockItem =
        seconds >= 10 ? seconds : `0${seconds}`;

      const formatedDate: string = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;

      setTime(formatedDate);
    };

    update();

    const interval = setInterval((): void => {
      update();
    }, 1000);

    return (): void => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentTime(time);
  }, [time]);

  return (
    <div className="clock-container">
      <Clock heading={heading} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setCurrentTime: (time: string) => dispatch(setCurrentTime(time)),
  };
};

export default connect(null, mapDispatchToProps)(ClockContainer);
