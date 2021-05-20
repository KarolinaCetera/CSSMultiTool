import React, { useState } from "react";
import { MenuDrawer } from "./MenuDrawer";
import { menuElement } from "typings";

export const Menu: (props: { menuElements: menuElement[] }) => JSX.Element = ({
	menuElements,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setIsOpen(!isOpen);
	};

	return (
		<MenuDrawer
			menuElements={menuElements}
			toggleDrawer={toggleDrawer}
			isOpen={isOpen}
		/>
	);
};
