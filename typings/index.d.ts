import { DefaultRootState } from "react-redux";

interface ToggleDrawer {
	toggleDrawer: (visibility: boolean) => void;
}

type styleOption = {
	value: string;
	name: string;
};

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
