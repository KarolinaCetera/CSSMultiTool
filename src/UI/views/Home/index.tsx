import { buyMeACoffee } from "const";
import React from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.scss";

export const Home: React.FC = () => {
	return (
		<div className={classes.home}>
			<h2>CSSMultiTool</h2>
			<h3>Home of modern CSS generators</h3>
			<div className={classes.links}>
				<Link to="/about">Check my portfolio</Link>
				<a href={buyMeACoffee} target="_blank" rel="noreferrer">
					Buy me a Coffee
				</a>
			</div>
		</div>
	);
};
