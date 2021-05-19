import React from "react";
import classes from "./MenuList.module.scss";
import { MenuElement } from "./MenuElement";

export const MenuList: (props: {
	menuElements: menuElement[];
	toggleDrawer;
}) => JSX.Element = ({ menuElements, toggleDrawer }) => {
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
