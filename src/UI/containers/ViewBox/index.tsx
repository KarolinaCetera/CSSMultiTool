import React from "react";
import classes from "./ViewBox.module.scss";

export const ViewBox: (props) => JSX.Element = (props) => {
	return <div className={classes.viewBox}>{props.children}</div>;
};
