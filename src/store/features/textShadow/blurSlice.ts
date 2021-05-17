import { createSlice } from "@reduxjs/toolkit";

export const textBlurSlice = createSlice({
	name: "textShadowBlur",
	initialState: {
		blur: 0,
	},
	reducers: {
		setTextBlur: (state, action) => {
			state.blur = action.payload;
		},
	},
});

export const { setTextBlur } = textBlurSlice.actions;

export const textBlurSliceReducer = textBlurSlice.reducer;
