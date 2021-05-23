import React, { CSSProperties } from "react";
import classes from "./Example.module.scss";

export const Example: React.FC<{
	style?: CSSProperties;
	children?;
}> = (props) => (
	<div className={classes.example} style={props.style}>
		{props.children}
	</div>
);
