import React from "react";
import classes from "./Header.module.scss";
import { Title, Menu } from "UI";
import { menuElement } from "typings";

export const Header: (props: {
	menuElements: menuElement[];
}) => JSX.Element = ({ menuElements }) => (
	<header className={classes.header}>
		<Menu menuElements={menuElements} />
		<Title />
	</header>
);
