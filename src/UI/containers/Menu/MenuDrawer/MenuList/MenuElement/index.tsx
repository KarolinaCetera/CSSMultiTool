import React from "react";
import { Link } from "react-router-dom";
import { voidToggleDrawer } from "typings";

import classes from "./MenuElement.module.scss";

interface MenuElement {
	name: string;
	path: string;
	toggleDrawer: voidToggleDrawer;
}

export const MenuElement: React.FC<MenuElement> = ({
	name,
	path,
	toggleDrawer,
}) => (
	<li key={name} onClick={toggleDrawer()}>
		<Link to={path} className={classes.menuElement}>
			{name}
		</Link>
	</li>
);
