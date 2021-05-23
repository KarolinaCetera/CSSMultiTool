import { createSlice } from "@reduxjs/toolkit";

export const fontColorSlice = createSlice({
	name: "fontColor",
	initialState: {
		color: "#000000",
	},
	reducers: {
		setFontColor: (state, action) => {
			state.color = action.payload;
		},
	},
});

export const { setFontColor } = fontColorSlice.actions;

export const fontColorSliceReducer = fontColorSlice.reducer;
