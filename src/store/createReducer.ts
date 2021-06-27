import { combineReducers } from "@reduxjs/toolkit";
import {
	borderReducers,
	boxShadowReducers,
	filterReducers,
	fontsReducers,
	globalReducers,
	textShadowReducers,
} from "./reducers";

export const createReducer = (injectedReducers: Record<string, unknown> = {}) =>
	combineReducers({
		border: borderReducers,
		boxShadow: boxShadowReducers,
		fonts: fontsReducers,
		filter: filterReducers,
		global: globalReducers,
		textShadow: textShadowReducers,
		...injectedReducers,
	});
