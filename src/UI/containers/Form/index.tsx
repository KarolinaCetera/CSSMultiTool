import React, { ReactNode } from "react";

import classes from "./Form.module.scss";

export const Form: React.FC<{ children: ReactNode }> = (props) => {
	return <form className={classes.form}>{props.children}</form>;
};
