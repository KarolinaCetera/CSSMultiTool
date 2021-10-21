import React, { ReactNode } from "react";

import classes from "./ViewBox.module.scss";

export const ViewBox: React.FC<{ children: ReactNode }> = (props) => {
	return <div className={classes.viewBox}>{props.children}</div>;
};
