import React, { ReactNode } from "react";

import classes from "./ViewElement.module.scss";

export const ViewElement: React.FC<{
	children?: ReactNode;
	elementClass: string;
}> = (props) => {
	const viewElementClasses = `${classes.viewElement} ${
		classes[props.elementClass]
	}`;
	return <div className={viewElementClasses}>{props.children}</div>;
};
