import * as textShadowFeatures from "store";
import { CSSPropsTypes } from "typings";

export const textShadowProps: Array<CSSPropsTypes> = [
	{ id: "color", modifyStyle: textShadowFeatures.setTextShadowColor },
	{ id: "blur", modifyStyle: textShadowFeatures.setTextShadowBlur },
	{ id: "horizontal", modifyStyle: textShadowFeatures.setTextShadowHorizontal },
	{ id: "opacity", modifyStyle: textShadowFeatures.setTextShadowOpacity },
	{ id: "vertical", modifyStyle: textShadowFeatures.setTextShadowVertical },
];
