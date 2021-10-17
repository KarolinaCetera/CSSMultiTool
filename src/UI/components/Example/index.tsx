import React, { CSSProperties } from "react";
import classes from "./Example.module.scss";

// typowanie done

export const Example: React.FC<{
	style?: CSSProperties;
	children?: JSX.Element;
}> = (props) => (
	<div className={classes.example} style={props.style}>
		{props.children}
	</div>
);
