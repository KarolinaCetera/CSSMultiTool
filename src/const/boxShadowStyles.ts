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
	{ value: "blur", func: setBoxShadowBlur },
	{ value: "color", func: setBoxShadowColor },
	{ value: "horizontal", func: setBoxShadowHorizontal },
	{ value: "opacity", func: setBoxShadowOpacity },
	{ value: "spread", func: setBoxShadowSpread },
	{ value: "vertical", func: setBoxShadowVertical },
];
