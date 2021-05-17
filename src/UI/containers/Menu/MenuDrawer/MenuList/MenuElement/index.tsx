import React from "react";
import { Link } from "react-router-dom";
import classes from "./MenuElement.module.scss";

export const MenuElement = ({ name, path, toggleDrawer }) => {
	return (
		<li key={name} onClick={toggleDrawer()}>
			<Link to={path} className={classes.menuElement}>
				{name}
			</Link>
		</li>
	);
};
