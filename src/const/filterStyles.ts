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
import { styleOption } from "typings";

export const filterProps = [
	{ value: "blur", func: setFilterBlur },
	{ value: "brightness", func: setFilterBrightness },
	{ value: "contras", func: setFilterContrast },
	{ value: "dropShadow", func: setFilterDropShadow },
	{ value: "greyScale", func: setFilterGreyScale },
	{ value: "hue", func: setFilterHue },
	{ value: "invert", func: setFilterInvert },
	{ value: "opacity", func: setFilterOpacity },
	{ value: "saturate", func: setFilterSaturate },
	{ value: "sepia", func: setFilterSepia },
];

export const dropShadowProps = [
	{ value: "drop shadow offsetX", type: "number" },
	{ value: "drop shadow offsetY", type: "number" },
	{ value: "drop shadow blurRadius", type: "number" },
	{ value: "drops shadow color", type: "color" },
];
