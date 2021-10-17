import { Button, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { DrawerProps } from "typings";

import { MenuList } from "./MenuList";

export const MenuDrawer: React.FC<DrawerProps> = ({
	menuElements,
	toggleDrawer,
	isOpen,
}) => (
	<>
		<Button onClick={toggleDrawer(true)}>
			<MenuIcon style={{ color: "white", fontSize: "40px" }} />
		</Button>
		<Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
			<MenuList menuElements={menuElements} toggleDrawer={toggleDrawer} />
		</Drawer>
	</>
);
