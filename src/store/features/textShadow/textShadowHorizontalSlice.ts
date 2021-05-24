import { createSlice } from "@reduxjs/toolkit";

export const textShadowHorizontalSlice = createSlice({
	name: "textShadowHorizontalLength",
	initialState: {
		textHorizontal: 25,
	},
	reducers: {
		setTextShadowHorizontal: (state, action) => {
			state.textHorizontal = action.payload;
		},
	},
});

export const { setTextShadowHorizontal } = textShadowHorizontalSlice.actions;

export const textShadowHorizontalReducer = textShadowHorizontalSlice.reducer;
