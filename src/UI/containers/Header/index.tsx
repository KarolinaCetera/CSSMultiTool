import React from "react";
import classes from "./Header.module.scss";
import { MenuElements } from "typings";
import { Title, Menu } from "UI";

export const Header: React.FC<MenuElements> = ({ menuElements }) => (
	<header className={classes.header}>
		<Menu menuElements={menuElements} />
		<Title />
	</header>
);
