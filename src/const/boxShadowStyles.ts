import {
	setBoxShadowBlur,
	setBoxShadowColor,
	setBoxShadowHorizontal,
	setBoxShadowOpacity,
	setBoxShadowSpread,
	setBoxShadowVertical,
} from "store";
import { CSSPropsTypes } from "typings";

export const boxShadowProps: CSSPropsTypes[] = [
	{ id: "blur", modifyStyle: setBoxShadowBlur },
	{ id: "color", modifyStyle: setBoxShadowColor },
	{ id: "horizontal", modifyStyle: setBoxShadowHorizontal },
	{ id: "opacity", modifyStyle: setBoxShadowOpacity },
	{ id: "spread", modifyStyle: setBoxShadowSpread },
	{ id: "vertical", modifyStyle: setBoxShadowVertical },
];
