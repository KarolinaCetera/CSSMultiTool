import { combineReducers } from "@reduxjs/toolkit";
import {
	fontColorReducer,
	fontSizeSliceReducer,
	fontStyleReducer,
	fontWeightReducer,
	letterSpacingReducer,
	lineHeightReducer,
	textTransformReducer,
	wordSpacingReducer,
} from "../features";

export const fontsReducers = combineReducers({
	fontColor: fontColorReducer,
	fontSize: fontSizeSliceReducer,
	fontStyle: fontStyleReducer,
	fontWeight: fontWeightReducer,
	letterSpacing: letterSpacingReducer,
	lineHeight: lineHeightReducer,
	textTransform: textTransformReducer,
	wordSpacing: wordSpacingReducer,
});
