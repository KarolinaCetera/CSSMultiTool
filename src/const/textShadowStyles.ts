import {
	setTextBlur,
	setTextColor,
	setTextHorizontal,
	setTextOpacity,
	setTextVertical,
} from "../store";

export const textShadowProps = [
	{ value: "blur", func: setTextBlur },
	{ value: "color", func: setTextColor },
	{ value: "horizontal", func: setTextHorizontal },
	{ value: "opacity", func: setTextOpacity },
	{ value: "vertical", func: setTextVertical },
];
