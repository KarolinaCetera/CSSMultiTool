import {
	CombinedState,
	combineReducers,
	EmptyObject,
	Reducer,
} from "@reduxjs/toolkit";

import {
	borderReducers,
	boxShadowReducers,
	fontsReducers,
	globalReducers,
	textShadowReducers,
} from "./reducers";

type Global = EmptyObject & { radiusMode: { mode: string } };

type BoxShadow = EmptyObject & {
	boxShadowSpread: { spread: number };
	boxShadowOpacity: { opacity: number };
	boxShadowVertical: { vertical: number };
	boxShadowBlur: { blur: number };
	boxShadowColor: { shadowColor: string };
	boxShadowHorizontal: { horizontal: number };
};

type TextShadow = EmptyObject & {
	textShadowHorizontal: { textHorizontal: number };
	textShadowOpacity: { textOpacity: number };
	textShadowColor: { textColor: string };
	textShadowVertical: { textVertical: number };
	textShadowBlur: { blur: number };
};

type Fonts = EmptyObject & {
	textTransform: { textTransform: string };
	fontSize: { fontSize: number };
	wordSpacing: { wordSpacing: number };
	lineHeight: { lineHeight: number };
	fontStyle: { fontStyle: string };
	fontColor: { color: string };
	letterSpacing: { letterSpacing: number };
	fontWeight: { fontWeight: string };
};

type Border = EmptyObject & {
	borderWidth: { width: number };
	borderType: { type: string };
	borderRadiusBL: { radiusBL: number };
	borderColor: { color: string };
	borderRadius: { radius: number };
	borderRadiusBR: { radiusBR: number };
	borderRadiusTR: { radiusTR: number };
	borderRadiusTL: { radiusTL: number };
};

type ReducerState = EmptyObject & {
	global: Global;
	boxShadow: BoxShadow;
	textShadow: TextShadow;
	fonts: Fonts;
	border: Border;
};

export const createReducer = (
	injectedReducers: Record<string, unknown> = {},
): Reducer<CombinedState<ReducerState>> =>
	combineReducers({
		border: borderReducers,
		boxShadow: boxShadowReducers,
		fonts: fontsReducers,
		global: globalReducers,
		textShadow: textShadowReducers,
		...injectedReducers,
	});
