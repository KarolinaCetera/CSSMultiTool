import React from "react";

import classes from "./ViewElement.module.scss";

export const ViewElement: React.FC<{ children?; elementClass? }> = (props) => {
	return (
		<div
			className={`${classes.viewElement} ${
				props.elementClass && classes.styleAndSample
			}`}
		>
			{props.children}
		</div>
	);
};
