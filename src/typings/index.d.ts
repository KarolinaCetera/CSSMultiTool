import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { ReactElement } from "react";

interface ToggleDrawer {
	toggleDrawer: (visibility: boolean) => void;
}

type styleOption = {
	value: string | number;
	name: string;
};

interface menuElement {
	name: string;
	path: string;
	component: React.LazyExoticComponent<React.FC<unknown>>;
}

type MenuElements = {
	menuElements: Array<menuElement>;
};

type DrawerEvent = React.KeyboardEvent | React.MouseEvent;

type voidToggleDrawer = () => (event: DrawerEvent) => void;

type defaultToggleDrawer = (
	openDrawer: boolean,
) => (event: React.KeyboardEvent | React.MouseEvent) => void;

interface DrawerProps extends MenuElements {
	toggleDrawer: voidToggleDrawer | defaultToggleDrawer;
	isOpen?: boolean;
}

interface CSSPropsTypes {
	id: string;
	name?: string;
	modifyStyle: ActionCreatorWithPayload<string>;
}

type dropShadowTypes = {
	offsetX: number;
	offsetY: number;
	blurRadius: number;
	color: string;
};

type hooksReturnType = string | number | dropShadowTypes | rgbColor | unknown;

interface ControlProps {
	[key: string]: hooksReturnType;
}

type rgbColor =
	| { r: number; g: number; b: number }
	| { r: string; g: string; b: string };

interface FormHookProps {
	id: string;
	type?: styleOption[];
	modifyStyle: ActionCreatorWithPayload<string>;
	value?: string;
	step?: number;
	min?: number;
	max?: number;
	[key: string];
}

interface HookReturn {
	id: string;
	form: ReactElement<string, string> | null | undefined;
}
