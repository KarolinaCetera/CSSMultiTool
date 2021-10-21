import React, { ReactNode } from "react";

import classes from "./ViewElement.module.scss";

export const ViewElement: React.FC<{
	children?: ReactNode;
	elementClass?: boolean;
}> = (props) => {
	const viewElementClasses = `
	${classes.viewElement} 
	${props.elementClass && classes.sample}
	`;

	return <div className={viewElementClasses}>{props.children}</div>;
};
