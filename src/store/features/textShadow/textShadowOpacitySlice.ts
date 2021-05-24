import { createSlice } from "@reduxjs/toolkit";

export const textShadowOpacitySlice = createSlice({
	name: "textShadowOpacity",
	initialState: {
		textOpacity: 0.75,
	},
	reducers: {
		setTextShadowOpacity: (state, action) => {
			state.textOpacity = action.payload;
		},
	},
});

export const { setTextShadowOpacity } = textShadowOpacitySlice.actions;

export const textShadowOpacityReducer = textShadowOpacitySlice.reducer;
