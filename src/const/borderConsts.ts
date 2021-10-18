import * as borderFeatures from "store";
import { CSSPropsTypes, styleOption } from "typings";

export const borderTypeOptions: Array<styleOption> = [
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

export const borderProps: Array<CSSPropsTypes> = [
	{ id: "width", modifyStyle: borderFeatures.setBorderWidth },
	{ id: "type", modifyStyle: borderFeatures.setBorderType },
	{ id: "color", modifyStyle: borderFeatures.setBorderColor },
];
