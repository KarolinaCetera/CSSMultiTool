import { createSlice } from "@reduxjs/toolkit";

export const textColorSlice = createSlice({
	name: "textShadowColor",
	initialState: {
		textColor: "#000000",
	},
	reducers: {
		setTextColor: (state, action) => {
			state.textColor = action.payload;
		},
	},
});

export const { setTextColor } = textColorSlice.actions;

export const textColorSliceReducer = textColorSlice.reducer;
