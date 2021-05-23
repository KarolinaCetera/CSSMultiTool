import React from "react";
import classes from "./ViewElement.module.scss";

export const ViewElement: React.FC<{ children? }> = (props) => {
	return <div className={classes.viewElement}>{props.children}</div>;
};
