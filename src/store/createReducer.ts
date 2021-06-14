import { combineReducers } from "@reduxjs/toolkit";
import {
	borderReducers,
	boxShadowReducers,
	filterReducers,
	fontsReducers,
	textShadowReducers,
} from "./reducers";

export const createReducer = (injectedReducers: Record<string, unknown> = {}) =>
	combineReducers({
		border: borderReducers,
		boxShadow: boxShadowReducers,
		fonts: fontsReducers,
		filter: filterReducers,
		textShadow: textShadowReducers,
		...injectedReducers,
	});
