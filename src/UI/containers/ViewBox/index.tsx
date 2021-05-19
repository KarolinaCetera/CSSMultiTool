import React from "react";
import classes from "./ViewBox.module.scss";

export const ViewBox: (props: any) => JSX.Element = (props) => {
	return <div className={classes.viewBox}>{props.children}</div>;
};
