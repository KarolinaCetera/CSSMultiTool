import { createSlice } from "@reduxjs/toolkit";

export const textDecorationSlice = createSlice({
	name: "textDecoration",
	initialState: {
		textDecoration: "none",
	},
	reducers: {
		setTextDecoration: (state, action) => {
			state.textDecoration = action.payload;
		},
	},
});

export const { setTextDecoration } = textDecorationSlice.actions;

export const textDecorationSliceReducer = textDecorationSlice.reducer;
