import {
	setFontColor,
	setFontSize,
	setFontStyle,
	setFontWeight,
	setLetterSpacing,
	setLineHeight,
	setTextTransform,
	setWordSpacing,
} from "store";
import { CSSPropsTypes, styleOption } from "typings";

export const fontProps = [
	{ value: "color", func: setFontColor },
	{ value: "size", func: setFontSize },
	{ value: "style", func: setFontStyle },
	{ value: "weight", func: setFontWeight },
	{ value: "letterSpacing", func: setLetterSpacing },
	{ value: "lineHeight", func: setLineHeight },
	{ value: "textTransform", func: setTextTransform },
	{ value: "wordSpacing", func: setWordSpacing },
];

export const fontStyleOptions: styleOption[] = [
	{ value: "", name: "Choose font style" },
	{ value: "normal", name: "Normal" },
	{ value: "italic", name: "Italic" },
	{ value: "oblique", name: "Oblique" },
];

export const fontWeightOptions: styleOption[] = [
	{ value: "", name: "Choose font style" },
	{ value: "normal", name: "Normal" },
	{ value: "bold", name: "Bold" },
	{ value: "lighter", name: "Lighter" },
	{ value: 100, name: "100" },
	{ value: 200, name: "200" },
	{ value: 300, name: "300" },
	{ value: 400, name: "400" },
	{ value: 500, name: "500" },
	{ value: 600, name: "600" },
	{ value: 700, name: "700" },
	{ value: 800, name: "800" },
	{ value: 900, name: "900" },
];

export const textTransformOptions: styleOption[] = [
	{
		value: "",
		name: "Choose text transform option",
	},
	{
		value: "none",
		name: "None",
	},
	{
		value: "capitalize",
		name: "Capitalice",
	},
	{
		value: "uppercase",
		name: "Uppercase",
	},
	{
		value: "lowercase",
		name: "Lowercase",
	},
];
