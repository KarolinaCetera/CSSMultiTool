import React from "react";
import classes from "./StyleText.module.scss";

// tekst zróżnicowany w zależności od routa?

export const StyleText: React.FC = () => {
	console.log(window.location.pathname);
	return <div className={classes.text}>Sample text</div>;
};
