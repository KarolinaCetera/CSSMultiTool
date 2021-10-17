import React from "react";
import { DrawerProps } from "typings";

import { MenuElement } from "./MenuElement";
import classes from "./MenuList.module.scss";

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
