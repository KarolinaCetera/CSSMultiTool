import {
	setBorderColor,
	setBorderRadius,
	setBorderRadiusBL,
	setBorderRadiusBR,
	setBorderRadiusTL,
	setBorderRadiusTR,
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
	{ id: "width", modifyStyle: setBorderWidth },
	{ id: "type", modifyStyle: setBorderType },
	{ id: "color", modifyStyle: setBorderColor },
	{ id: "radius", modifyStyle: setBorderRadius },
	{ id: "radiusTL", modifyStyle: setBorderRadiusTL },
	{ id: "radiusTR", modifyStyle: setBorderRadiusTR },
	{ id: "radiusBR", modifyStyle: setBorderRadiusBR },
	{ id: "radiusBL", modifyStyle: setBorderRadiusBL },
];
