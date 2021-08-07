import { combineReducers } from "@reduxjs/toolkit";
import {
	borderReducers,
	boxShadowReducers,
	fontsReducers,
	globalReducers,
	textShadowReducers,
} from "./reducers";

export const createReducer = (injectedReducers: Record<string, unknown> = {}) =>
	combineReducers({
		border: borderReducers,
		boxShadow: boxShadowReducers,
		fonts: fontsReducers,
		global: globalReducers,
		textShadow: textShadowReducers,
		...injectedReducers,
	});
