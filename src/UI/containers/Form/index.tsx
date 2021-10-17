import React from "react";

import classes from "./Form.module.scss";

export const Form: React.FC<{ children? }> = (props) => {
	return <form className={classes.form}>{props.children}</form>;
};
