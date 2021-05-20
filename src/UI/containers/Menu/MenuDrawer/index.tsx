import React from "react";
import { Button, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuList } from "./MenuList";
import { menuElement } from "typings";

export const MenuDrawer: (props: {
	menuElements: menuElement[];
	toggleDrawer;
	isOpen: boolean;
}) => JSX.Element = ({ menuElements, toggleDrawer, isOpen }) => {
	return (
		<>
			<Button onClick={toggleDrawer(true)}>
				<MenuIcon style={{ color: "white", fontSize: "40px" }} />
			</Button>
			<Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
				<MenuList menuElements={menuElements} toggleDrawer={toggleDrawer} />
			</Drawer>
		</>
	);
};
