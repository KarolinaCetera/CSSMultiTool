import React from "react";
import { MenuElements } from "typings";
import { Menu, Title } from "UI";

import classes from "./Header.module.scss";

export const Header: React.FC<MenuElements> = ({ menuElements }) => (
	<header className={classes.header}>
		<div className={classes.space}>
			<Menu menuElements={menuElements} />
			<Title />
		</div>
	</header>
);
