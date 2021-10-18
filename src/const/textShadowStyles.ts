import * as textShadowFeatures from "store";
import { CSSPropsTypes } from "typings";

export const textShadowProps: Array<CSSPropsTypes> = [
	{ id: "blur", modifyStyle: textShadowFeatures.setTextShadowBlur },
	{ id: "color", modifyStyle: textShadowFeatures.setTextShadowColor },
	{ id: "horizontal", modifyStyle: textShadowFeatures.setTextShadowHorizontal },
	{ id: "opacity", modifyStyle: textShadowFeatures.setTextShadowOpacity },
	{ id: "vertical", modifyStyle: textShadowFeatures.setTextShadowVertical },
];
