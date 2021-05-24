import {
	setBorderColor,
	setBorderRadius,
	setBorderType,
	setBorderWidth,
} from "store";
import { CSSPropsTypes, styleOption } from "typings";

export const borderTypeOptions: styleOption[] = [
	{ value: "", name: "Choose border type" },
	{ value: "solid", name: "Solid" },
	{ value: "dotted", name: "Dotted" },
	{ value: "dashed", name: "Dashed" },
	{ value: "none", name: "None" },
	{ value: "hidden", name: "Hidden" },
	{ value: "double", name: "Double" },
	{ value: "groove", name: "Groove" },
	{ value: "inset", name: "Inset" },
	{ value: "outset", name: "Outset" },
];

export const borderProps: CSSPropsTypes[] = [
	{ value: "width", func: setBorderWidth },
	{ value: "type", func: setBorderType },
	{ value: "color", func: setBorderColor },
	{ value: "radius", func: setBorderRadius },
];
