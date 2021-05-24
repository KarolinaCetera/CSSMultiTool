import {
	setTextShadowBlur,
	setTextShadowColor,
	setTextShadowHorizontal,
	setTextShadowOpacity,
	setTextShadowVertical,
} from "store";
import { CSSPropsTypes } from "typings";

export const textShadowProps: CSSPropsTypes[] = [
	{ value: "blur", func: setTextShadowBlur },
	{ value: "color", func: setTextShadowColor },
	{ value: "horizontal", func: setTextShadowHorizontal },
	{ value: "opacity", func: setTextShadowOpacity },
	{ value: "vertical", func: setTextShadowVertical },
];
