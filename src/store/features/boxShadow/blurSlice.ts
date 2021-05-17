import { createSlice } from "@reduxjs/toolkit";

export const blurSlice = createSlice({
	name: "boxShadowBlur",
	initialState: {
		blur: 0,
	},
	reducers: {
		setBlur: (state, action) => {
			state.blur = action.payload;
		},
	},
});

export const { setBlur } = blurSlice.actions;

export const blurSliceReducer = blurSlice.reducer;
