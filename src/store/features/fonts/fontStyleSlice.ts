import { createSlice } from "@reduxjs/toolkit";

export const fontStyleSlice = createSlice({
	name: "fontStyle",
	initialState: {
		fontStyle: "normal",
	},
	reducers: {
		setFontStyle: (state, action) => {
			state.fontStyle = action.payload;
		},
	},
});

export const { setFontStyle } = fontStyleSlice.actions;

export const fontStyleReducer = fontStyleSlice.reducer;
