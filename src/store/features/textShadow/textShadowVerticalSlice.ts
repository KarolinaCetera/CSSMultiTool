import { createSlice } from "@reduxjs/toolkit";

export const textShadowVerticalSlice = createSlice({
	name: "textShadowVerticalLength",
	initialState: {
		textVertical: 25,
	},
	reducers: {
		setTextShadowVertical: (state, action) => {
			state.textVertical = action.payload;
		},
	},
});

export const { setTextShadowVertical } = textShadowVerticalSlice.actions;

export const textShadowVerticalReducer = textShadowVerticalSlice.reducer;
