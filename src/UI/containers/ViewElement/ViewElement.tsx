import React from "react";
import classes from "./ViewElement.module.scss";

export const ViewElement = (props) => {
	return <div className={classes.viewElement}>{props.children}</div>;
};
