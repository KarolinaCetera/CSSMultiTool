import React from "react";
import { Link } from "react-router-dom";

import classes from "./Title.module.scss";

export const Title: React.FC = () => (
	<h1>
		<Link className={classes.title} to="/">
			CSSMultiTool
		</Link>
	</h1>
);
