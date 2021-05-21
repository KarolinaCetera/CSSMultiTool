import {
	setBlur,
	setShadowColor,
	setHorizontal,
	setOpacity,
	setSpread,
	setVertical,
} from "store";
import { CSSPropsTypes } from "typings";

export const boxShadowProps: CSSPropsTypes[] = [
	{ value: "blur", func: setBlur },
	{ value: "color", func: setShadowColor },
	{ value: "horizontal", func: setHorizontal },
	{ value: "opacity", func: setOpacity },
	{ value: "spread", func: setSpread },
	{ value: "vertical", func: setVertical },
];
