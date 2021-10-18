import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ReactElement } from "react";

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
	menuElements: menuElement[];
};

interface DrawerProps extends MenuElements {
	toggleDrawer;
	isOpen?: boolean;
}

interface CSSPropsTypes {
	id: string;
	name?: string;
	modifyStyle: ActionCreatorWithPayload<string>;
}

interface Global {
	global: {
		radiusMode: {
			mode: string;
		};
	};
}

type dropShadowTypes = {
	offsetX: number;
	offsetY: number;
	blurRadius: number;
	color: string;
};

type hooksReturnType = string | number | dropShadowTypes | rgbColor;

interface ControlProps {
	[key: string]: hooksReturnType;
}

type rgbColor =
	| { r: number; g: number; b: number }
	| { r: string; g: string; b: string };

interface FormHookProps {
	id?: string;
	type?: styleOption[];
	modifyStyle: ActionCreatorWithPayload<any>;
	[key: string];
}

interface HookReturn {
	id: string;
	form: ReactElement<string, string> | null | undefined;
}

interface RadiusModeFeatures {
	id: string;
	labelText: string;
}
