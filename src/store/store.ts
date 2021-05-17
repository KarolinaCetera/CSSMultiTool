import { configureStore } from "@reduxjs/toolkit";
import {
	widthSliceReducer,
	typeSliceReducer,
	colorSliceReducer,
	radiusSliceReducer,
	horizontalSliceReducer,
	opacitySliceReducer,
	shadowColorSliceReducer,
	blurSliceReducer,
	spreadSliceReducer,
	verticalSliceReducer,
	textHorizontalSliceReducer,
	textOpacitySliceReducer,
	textVerticalSliceReducer,
} from "./features";
import { textBlurSliceReducer, textColorSliceReducer } from "./features";

export const store = configureStore({
	reducer: {
		borderWidth: widthSliceReducer,
		borderType: typeSliceReducer,
		borderColor: colorSliceReducer,
		borderRadius: radiusSliceReducer,
		boxShadowHorizontal: horizontalSliceReducer,
		boxShadowOpacity: opacitySliceReducer,
		boxShadowColor: shadowColorSliceReducer,
		boxShadowBlur: blurSliceReducer,
		boxShadowSpread: spreadSliceReducer,
		boxShadowVertical: verticalSliceReducer,
		textShadowBlur: textBlurSliceReducer,
		textShadowColor: textColorSliceReducer,
		textShadowHorizontal: textHorizontalSliceReducer,
		textShadowOpacity: textOpacitySliceReducer,
		textShadowVertical: textVerticalSliceReducer,
	},
});
