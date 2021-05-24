import { createSlice } from "@reduxjs/toolkit";

export const textShadowBlurSlice = createSlice({
	name: "textShadowBlur",
	initialState: {
		blur: 0,
	},
	reducers: {
		setTextShadowBlur: (state, action) => {
			state.blur = action.payload;
		},
	},
});

export const { setTextShadowBlur } = textShadowBlurSlice.actions;

export const textShadowBlurReducer = textShadowBlurSlice.reducer;
