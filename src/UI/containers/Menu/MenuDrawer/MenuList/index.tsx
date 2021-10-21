import React from "react";
import { DrawerProps, voidToggleDrawer } from "typings";

import { MenuElement } from "./MenuElement";
import classes from "./MenuList.module.scss";

export const MenuList: React.FC<DrawerProps> = ({
	menuElements,
	toggleDrawer,
}) => (
	<ul className={classes.menuList}>
		{menuElements.map((menuElement) => (
			<MenuElement
				toggleDrawer={toggleDrawer as voidToggleDrawer}
				key={menuElement.name}
				name={menuElement.name}
				path={menuElement.path}
			/>
		))}
	</ul>
);
