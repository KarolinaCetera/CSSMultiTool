import { createSlice } from "@reduxjs/toolkit";

export const textHorizontalSlice = createSlice({
	name: "textShadowHorizontalLength",
	initialState: {
		textHorizontal: 25,
	},
	reducers: {
		setTextHorizontal: (state, action) => {
			state.textHorizontal = action.payload;
		},
	},
});

export const { setTextHorizontal } = textHorizontalSlice.actions;

export const textHorizontalSliceReducer = textHorizontalSlice.reducer;
