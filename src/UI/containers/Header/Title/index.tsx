import React from "react";
import { Link } from "react-router-dom";

import classes from "./Title.module.scss";

export const Title: React.FC = () => (
	<>
		<Link className={classes.title} to="/">
			<span>CSSMultiTool</span>
		</Link>
	</>
);
