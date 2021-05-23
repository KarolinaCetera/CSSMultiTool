import { createSlice } from "@reduxjs/toolkit";

export const fontSizeSlice = createSlice({
	name: "fontSize",
	initialState: {
		fontSize: 12,
	},
	reducers: {
		setFontSize: (state, action) => {
			state.fontSize = action.payload;
		},
	},
});

export const { setFontSize } = fontSizeSlice.actions;

export const fontSizeSliceReducer = fontSizeSlice.reducer;
