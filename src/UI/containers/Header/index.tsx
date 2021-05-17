import React from "react";
import classes from "./Header.module.scss";
import { Title, Menu } from "UI";

export const Header = ({ menuElements }) => {
	return (
		<header className={classes.header}>
			<Menu menuElements={menuElements} />
			<Title />
		</header>
	);
};
