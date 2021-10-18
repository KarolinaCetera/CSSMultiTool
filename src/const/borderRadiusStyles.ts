import * as borderFeatures from "store";

export const borderRadiusProps = [
	{ id: "radiusTL", modifyStyle: borderFeatures.setBorderRadiusTL },
	{ id: "radiusTR", modifyStyle: borderFeatures.setBorderRadiusTR },
	{ id: "radiusBR", modifyStyle: borderFeatures.setBorderRadiusBR },
	{ id: "radiusBL", modifyStyle: borderFeatures.setBorderRadiusBL },
];
