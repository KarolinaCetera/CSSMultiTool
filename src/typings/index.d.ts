import "./styleProperties";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { DefaultRootState } from "react-redux";
import { CSSProperties } from "react";

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
	border: {
		borderWidth: { width: number };
		borderType: { type: string };
		borderColor: { color: string };
		borderRadius: { radius: number };
		borderRadiusTL: { radiusTL: number };
		borderRadiusTR: { radiusTR: number };
		borderRadiusBR: { radiusBR: number };
		borderRadiusBL: { radiusBL: number };
	};
}

interface BoxShadowStyles extends DefaultRootState {
	boxShadow: {
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
	};
}

type dropShadowTypes = {
	offsetX: number;
	offsetY: number;
	blurRadius: number;
	color: string;
};

interface FilterStyles extends DefaultRootState {
	filter: {
		filterBlur: { blur: number };
		filterBrightness: { brightness: number };
		filterContrast: { contrast: number };
		filterDropShadow: {
			dropShadow: dropShadowTypes;
		};
		filterGreyScale: { greyScale: number };
		filterHueRotate: { hueRotate: number };
		filterInvert: { invert: number };
		filterOpacity: { opacity: number };
		filterSaturate: { saturate: number };
		filterSepia: { sepia: number };
	};
}

interface FontStyles extends DefaultRootState {
	fonts: {
		fontColor: { color: string };
		fontSize: { fontSize: number };
		fontStyle: { fontStyle: string };
		fontWeight: { fontWeight: string | number };
		letterSpacing: { letterSpacing: number };
		lineHeight: { lineHeight: number };
		textDecoration: { textDecoration: string };
		textTransform: { textTransform: string };
		wordSpacing: { wordSpacing: string };
	};
}

interface TextShadowStyles extends DefaultRootState {
	textShadow: {
		textShadowBlur: {
			blur: number;
		};
		textShadowColor: {
			textColor: string;
		};
		textShadowHorizontal: { textHorizontal: number };
		textShadowOpacity: { textOpacity: number };
		textShadowVertical: { textVertical: number };
	};
}

interface Global {
	global: {
		radiusMode: {
			mode: string;
		};
	};
}

type dispatchGeneric = {
	payload: ActionCreatorWithPayload<any>;
	type: string;
};

type rgbColor =
	| { r: number; g: number; b: number }
	| { r: string; g: string; b: string };

type hooksReturnType = string | number | dropShadowTypes;
