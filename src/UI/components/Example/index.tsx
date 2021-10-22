import React, { CSSProperties } from "react";

import classes from "./Example.module.scss";

export const Example: React.FC<{
	style?: CSSProperties;
	children?: JSX.Element;
}> = (props) => {
	return (
		<div className={classes.example}>
			<div style={props.style}>{props.children}</div>
		</div>
	);
};
