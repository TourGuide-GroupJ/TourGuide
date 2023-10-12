import React from "react";
import classes from "./Event.module.css";

const Event = (props) => {
  return (
    <div className={classes.event}>
      <h1 className={classes.eventName}>{props.eventName}</h1>
    </div>
  );
};

export default Event;
