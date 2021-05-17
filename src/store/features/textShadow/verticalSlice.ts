import { createSlice } from "@reduxjs/toolkit";

export const textVerticalSlice = createSlice({
	name: "textShadowVerticalLength",
	initialState: {
		textVertical: 25,
	},
	reducers: {
		setTextVertical: (state, action) => {
			state.textVertical = action.payload;
		},
	},
});

export const { setTextVertical } = textVerticalSlice.actions;

export const textVerticalSliceReducer = textVerticalSlice.reducer;
