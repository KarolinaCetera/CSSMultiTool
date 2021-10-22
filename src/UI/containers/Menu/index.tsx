import React, { useState } from "react";
import { MenuElements } from "typings";

import { MenuDrawer } from "./MenuDrawer";

export const Menu: React.FC<MenuElements> = ({ menuElements }) => {
	const [isOpen, setIsOpen] = useState(false);

	const eventKeyDown = (event: React.MouseEvent) => event.type === "keydown";
	const eventTab = (event: React.KeyboardEvent) => event.key === "Tab";
	const eventShift = (event: React.KeyboardEvent) => event.key === "Shift";

	const isEventShiftOrTab = (event: React.KeyboardEvent) =>
		eventTab(event) || eventShift(event);

	const toggleDrawer = () => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
		!(
			eventKeyDown(event as React.MouseEvent) &&
			isEventShiftOrTab(event as React.KeyboardEvent)
		) && setIsOpen(!isOpen);
	};

	return (
		<MenuDrawer
			menuElements={menuElements}
			toggleDrawer={toggleDrawer}
			isOpen={isOpen}
		/>
	);
};
