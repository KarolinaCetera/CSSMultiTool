import { combineReducers } from "@reduxjs/toolkit";

import {
	textShadowBlurReducer,
	textShadowColorReducer,
	textShadowHorizontalReducer,
	textShadowOpacityReducer,
	textShadowVerticalReducer,
} from "../features";

export const textShadowReducers = combineReducers({
	textShadowBlur: textShadowBlurReducer,
	textShadowColor: textShadowColorReducer,
	textShadowHorizontal: textShadowHorizontalReducer,
	textShadowOpacity: textShadowOpacityReducer,
	textShadowVertical: textShadowVerticalReducer,
});
