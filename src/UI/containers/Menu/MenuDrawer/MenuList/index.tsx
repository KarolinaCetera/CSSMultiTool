import React from "react";
import classes from "./MenuList.module.scss";
import { MenuElement } from "./MenuElement";

export const MenuList = ({ menuElements, toggleDrawer }) => {
	return (
		<ul className={classes.menuList}>
			{menuElements.map((menuElement) => (
				<MenuElement
					toggleDrawer={toggleDrawer}
					key={menuElement.name}
					name={menuElement.name}
					path={menuElement.path}
				/>
			))}
		</ul>
	);
};
