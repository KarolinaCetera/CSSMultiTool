import { createSlice } from "@reduxjs/toolkit";

export const textShadowColorSlice = createSlice({
	name: "textShadowColor",
	initialState: {
		textColor: "#000000",
	},
	reducers: {
		setTextShadowColor: (state, action) => {
			state.textColor = action.payload;
		},
	},
});

export const { setTextShadowColor } = textShadowColorSlice.actions;

export const textShadowColorReducer = textShadowColorSlice.reducer;
