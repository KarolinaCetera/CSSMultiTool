import * as fontsFeatures from "store";
import { CSSPropsTypes, styleOption } from "typings";

export const fontProps: CSSPropsTypes[] = [
	{ id: "color", modifyStyle: fontsFeatures.setFontColor },
	{ id: "fontSize", modifyStyle: fontsFeatures.setFontSize },
	{ id: "fontStyle", modifyStyle: fontsFeatures.setFontStyle },
	{ id: "fontWeight", modifyStyle: fontsFeatures.setFontWeight },
	{ id: "letterSpacing", modifyStyle: fontsFeatures.setLetterSpacing },
	{ id: "lineHeight", modifyStyle: fontsFeatures.setLineHeight },
	{ id: "textTransform", modifyStyle: fontsFeatures.setTextTransform },
	{ id: "wordSpacing", modifyStyle: fontsFeatures.setWordSpacing },
];

export const fontStyleOptions: styleOption[] = [
	{ value: "normal", name: "Normal" },
	{ value: "italic", name: "Italic" },
	{ value: "oblique", name: "Oblique" },
];

export const fontWeightOptions: styleOption[] = [
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
		value: "none",
		name: "None",
	},
	{
		value: "capitalize",
		name: "Capitalize",
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
