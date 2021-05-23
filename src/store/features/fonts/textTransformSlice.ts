import { createSlice } from "@reduxjs/toolkit";

export const textTransformSlice = createSlice({
	name: "textTransform",
	initialState: {
		textTransform: "none",
	},
	reducers: {
		setTextTransform: (state, action) => {
			state.textTransform = action.payload;
		},
	},
});

export const { setTextTransform } = textTransformSlice.actions;

export const textTransformSliceReducer = textTransformSlice.reducer;
