import React from "react";
import classes from "./Header.module.scss";
import { Menu, Title } from "../../components";

export const Header = ({ menuElements }) => {
	return (
		<header className={classes.header}>
			<Menu menuElements={menuElements} />
			<Title />
		</header>
	);
};
