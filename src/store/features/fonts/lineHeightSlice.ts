import { createSlice } from "@reduxjs/toolkit";

export const lineHeightSlice = createSlice({
	name: "lineHeight",
	initialState: {
		lineHeight: 1.2,
	},
	reducers: {
		setLineHeight: (state, action) => {
			state.lineHeight = action.payload;
		},
	},
});

export const { setLineHeight } = lineHeightSlice.actions;

export const lineHeightReducer = lineHeightSlice.reducer;
