import "./styleProperties";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { DefaultRootState } from "react-redux";

interface ToggleDrawer {
	toggleDrawer: (visibility: boolean) => void;
}

type styleOption = {
	value: string;
	name: string;
};

interface menuElement {
	name: string;
	path: string;
	component: React.LazyExoticComponent<React.FC<unknown>>;
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
