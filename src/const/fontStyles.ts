import {
	setFontColor,
	setFontSize,
	setFontStyle,
	setFontWeight,
	setLetterSpacing,
	setLineHeight,
	setTextDecoration,
	setTextTransform,
	setWordSpacing,
} from "store";

// opcje dla style, weight, textDecoration, transform?

export const fontProps = [
	{ value: "color", func: setFontColor },
	{ value: "size", func: setFontSize },
	{ value: "style", func: setFontStyle },
	{ value: "weight", func: setFontWeight },
	{ value: "letterSpacing", func: setLetterSpacing },
	{ value: "lineHeight", func: setLineHeight },
	{ value: "textDecoration", func: setTextDecoration },
	{ value: "textTransform", func: setTextTransform },
	{ value: "wordSpacing", func: setWordSpacing },
];
