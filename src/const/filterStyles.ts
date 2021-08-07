import {
	setFilterBlur,
	setFilterBrightness,
	setFilterContrast,
	setFilterDropShadow,
	setFilterGreyScale,
	setFilterHue,
	setFilterInvert,
	setFilterOpacity,
	setFilterSaturate,
	setFilterSepia,
} from "store";
import { CSSPropsTypes } from "typings";

export const filterProps: CSSPropsTypes[] = [
	{ id: "blur", modifyStyle: setFilterBlur },
	{ id: "brightness", modifyStyle: setFilterBrightness },
	{ id: "contrast", modifyStyle: setFilterContrast },
	{ id: "dropShadow", modifyStyle: setFilterDropShadow },
	{ id: "greyScale", modifyStyle: setFilterGreyScale },
	{ id: "hue", modifyStyle: setFilterHue },
	{ id: "invert", modifyStyle: setFilterInvert },
	{ id: "opacity", modifyStyle: setFilterOpacity },
	{ id: "saturate", modifyStyle: setFilterSaturate },
	{ id: "sepia", modifyStyle: setFilterSepia },
];

export const dropShadowProps = [
	{ id: "drop shadow offsetX", type: "number" },
	{ id: "drop shadow offsetY", type: "number" },
	{ id: "drop shadow blurRadius", type: "number" },
	{ id: "drops shadow color", type: "color" },
];
