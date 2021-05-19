import React from "react";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";
import { buyMeACoffee } from "const";

export const Home: React.FC = () => {
	return (
		<div className={classes.home}>
			<h2>CSSMultiTool</h2>
			<h3>Home of modern CSS generators</h3>
			<div className={classes.links}>
				<Link to="/about">Check my portfolio</Link>
				<a href={buyMeACoffee}>Buy me a Coffee</a>
			</div>
		</div>
	);
};
