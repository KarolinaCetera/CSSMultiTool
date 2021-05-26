import { combineReducers } from "@reduxjs/toolkit";
import {
	filterBlurReducer,
	filterBrightnessReducer,
	filterContrastReducer,
	filterDropShadowReducer,
	filterHueReducer,
	filterInvertReducer,
	filterOpacityReducer,
	filterSaturateReducer,
	filterSepiaReducer,
} from "../features";

export const filterReducers = combineReducers({
	filterBlur: filterBlurReducer,
	filterBrightness: filterBrightnessReducer,
	filterContrast: filterContrastReducer,
	filterDropShadow: filterDropShadowReducer,
	filterHueRotate: filterHueReducer,
	filterInvert: filterInvertReducer,
	filterOpacity: filterOpacityReducer,
	filterSaturate: filterSaturateReducer,
	filterSepia: filterSepiaReducer,
});
