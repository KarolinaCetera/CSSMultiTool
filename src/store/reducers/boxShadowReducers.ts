import { combineReducers } from "@reduxjs/toolkit";

import {
	boxShadowBlurReducer,
	boxShadowColorReducer,
	boxShadowHorizontalReducer,
	boxShadowOpacityReducer,
	boxShadowSpreadReducer,
	boxShadowVerticalReducer,
} from "../features";

export const boxShadowReducers = combineReducers({
	boxShadowHorizontal: boxShadowHorizontalReducer,
	boxShadowOpacity: boxShadowOpacityReducer,
	boxShadowColor: boxShadowColorReducer,
	boxShadowBlur: boxShadowBlurReducer,
	boxShadowSpread: boxShadowSpreadReducer,
	boxShadowVertical: boxShadowVerticalReducer,
});
