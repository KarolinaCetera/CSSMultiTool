import React from "react";

import classes from "./ViewBox.module.scss";

export const ViewBox: React.FC<{ children? }> = (props) => {
	return <div className={classes.viewBox}>{props.children}</div>;
};
