import React from "react";
import classes from "./Example.module.scss";

export const Example = ({ style }) => {
	return <div className={classes.example} style={style} />;
};
