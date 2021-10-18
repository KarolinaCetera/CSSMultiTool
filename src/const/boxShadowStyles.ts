import * as boxShadowFeatures from "store";
import { CSSPropsTypes } from "typings";

export const boxShadowProps: Array<CSSPropsTypes> = [
	{ id: "color", modifyStyle: boxShadowFeatures.setBoxShadowColor },
	{ id: "blur", modifyStyle: boxShadowFeatures.setBoxShadowBlur },
	{ id: "horizontal", modifyStyle: boxShadowFeatures.setBoxShadowHorizontal },
	{ id: "opacity", modifyStyle: boxShadowFeatures.setBoxShadowOpacity },
	{ id: "spread", modifyStyle: boxShadowFeatures.setBoxShadowSpread },
	{ id: "vertical", modifyStyle: boxShadowFeatures.setBoxShadowVertical },
];
