import React from "react";
import classes from "./MenuList.module.scss";
import { DrawerProps } from "typings";
import { MenuElement } from "./MenuElement";

export const MenuList: React.FC<DrawerProps> = ({
	menuElements,
	toggleDrawer,
}) => (
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
