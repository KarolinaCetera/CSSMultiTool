import {
	CombinedState,
	combineReducers,
	EmptyObject,
	Reducer,
} from "@reduxjs/toolkit";

import {
	borderRadiusReducers,
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
	borderColor: { color: string };
};

type BorderRadius = EmptyObject & {
	borderRadiusBL: { radiusBL: number };
	borderRadiusBR: { radiusBR: number };
	borderRadiusTR: { radiusTR: number };
	borderRadiusTL: { radiusTL: number };
};

type ReducerState = EmptyObject & {
	border: Border;
	borderRadius: BorderRadius;
	boxShadow: BoxShadow;
	fonts: Fonts;
	global: Global;
	textShadow: TextShadow;
};

export const createReducer = (
	injectedReducers: Record<string, unknown> = {},
): Reducer<CombinedState<ReducerState>> =>
	combineReducers({
		border: borderReducers,
		borderRadius: borderRadiusReducers,
		boxShadow: boxShadowReducers,
		fonts: fontsReducers,
		global: globalReducers,
		textShadow: textShadowReducers,
		...injectedReducers,
	});
