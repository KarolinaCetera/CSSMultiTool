import {
	setTextShadowBlur,
	setTextShadowColor,
	setTextShadowHorizontal,
	setTextShadowOpacity,
	setTextShadowVertical,
} from "store";
import { CSSPropsTypes } from "typings";

export const textShadowProps: CSSPropsTypes[] = [
	{ id: "blur", modifyStyle: setTextShadowBlur },
	{ id: "color", modifyStyle: setTextShadowColor },
	{ id: "horizontal", modifyStyle: setTextShadowHorizontal },
	{ id: "opacity", modifyStyle: setTextShadowOpacity },
	{ id: "vertical", modifyStyle: setTextShadowVertical },
];
