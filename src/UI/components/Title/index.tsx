import React from "react";
import classes from "./Title.module.scss";
import { Link } from "react-router-dom";

export const Title: React.FC = () => {
	return (
		<h1>
			<Link className={classes.title} to="/">
				CSSMultiTool
			</Link>
		</h1>
	);
};
