import React from "react";

import classes from "./ViewElement.module.scss";

export const ViewElement: React.FC<{ children?; elementClass? }> = (props) => {
	const viewElementClasses = `
	${classes.viewElement} 
	${props.elementClass && classes.sample}
	`;

	return <div className={viewElementClasses}>{props.children}</div>;
};
