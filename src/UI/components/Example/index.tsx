import React from "react";
import classes from "./Example.module.scss";

export const Example = (props) => {
	return (
		<div className={classes.example} style={props.style}>
			{props.children}
		</div>
	);
};
