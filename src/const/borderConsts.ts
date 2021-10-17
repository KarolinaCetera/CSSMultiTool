import * as borderFeatures from "store";
import { CSSPropsTypes, RadiusModeFeatures, styleOption } from "typings";

export const borderTypeOptions: styleOption[] = [
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
	{ id: "width", modifyStyle: borderFeatures.setBorderWidth },
	{ id: "type", modifyStyle: borderFeatures.setBorderType },
	{ id: "color", modifyStyle: borderFeatures.setBorderColor },
	{ id: "radius", modifyStyle: borderFeatures.setBorderRadius },
	{ id: "radiusTL", modifyStyle: borderFeatures.setBorderRadiusTL },
	{ id: "radiusTR", modifyStyle: borderFeatures.setBorderRadiusTR },
	{ id: "radiusBR", modifyStyle: borderFeatures.setBorderRadiusBR },
	{ id: "radiusBL", modifyStyle: borderFeatures.setBorderRadiusBL },
];

export const radiusMode: Array<RadiusModeFeatures> = [
	{ id: "all", labelText: "All corners" },
	{ id: "separate", labelText: "Separate corners" },
];
