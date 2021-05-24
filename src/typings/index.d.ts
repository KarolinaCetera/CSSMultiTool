import "./styleProperties";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { DefaultRootState } from "react-redux";

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
	value: string;
	func: ActionCreatorWithPayload<string>;
}

interface BorderStyles extends DefaultRootState {
	borderWidth: { width: number };
	borderType: { type: string };
	borderColor: { color: string };
	borderRadius: { radius: string };
}

interface BoxShadowStyles extends DefaultRootState {
	boxShadowBlur: {
		blur: number;
	};
	boxShadowColor: {
		shadowColor: string;
	};
	boxShadowHorizontal: { horizontal: number };
	boxShadowOpacity: { opacity: number };
	boxShadowSpread: { spread: number };
	boxShadowVertical: { vertical: number };
}

interface FontStyles extends DefaultRootState {
	fontColor: { color: string };
	fontSize: { fontSize: number };
	fontStyle: { fontStyle: string };
	fontWeight: { fontWeight: string | number };
	letterSpacing: { letterSpacing: number };
	lineHeight: { lineHeight: number };
	textDecoration: { textDecoration: string };
	textTransform: { textTransform: string };
	wordSpacing: { wordSpacing: string };
}

interface TextShadowStyles extends DefaultRootState {
	textShadowBlur: {
		blur: number;
	};
	textShadowColor: {
		textColor: string;
	};
	textShadowHorizontal: { textHorizontal: number };
	textShadowOpacity: { textOpacity: number };
	textShadowVertical: { textVertical: number };
}

type dispatchGeneric = {
	payload: ActionCreatorWithPayload<any>;
	type: string;
};

type rgbColor =
	| { r: number; g: number; b: number }
	| { r: string; g: string; b: string };
