import { createSlice } from "@reduxjs/toolkit";

export const fontWeightSlice = createSlice({
	name: "fontWeight",
	initialState: {
		fontWeight: "normal",
	},
	reducers: {
		setFontWeight: (state, action) => {
			state.fontWeight = action.payload;
		},
	},
});

export const { setFontWeight } = fontWeightSlice.actions;

export const fontWeightReducer = fontWeightSlice.reducer;
