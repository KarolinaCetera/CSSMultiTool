import React from "react";
import classes from "./StyleText.module.scss";

const StyleText = () => {
	console.log(window.location.pathname);
	return <div className={classes.text}>Sample text</div>;
};

export default StyleText;
