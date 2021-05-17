// type MenuElement = {
// 	name: string;
// 	path: string;
// };
//
// type MenuElements = MenuElement[];

import { DefaultRootState } from "react-redux";

interface ToggleDrawer {
	toggleDrawer: (visibility: boolean) => void;
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
