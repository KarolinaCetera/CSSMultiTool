import { createSlice } from "@reduxjs/toolkit";

export const textOpacitySlice = createSlice({
	name: "textShadowOpacity",
	initialState: {
		textOpacity: 0.75,
	},
	reducers: {
		setTextOpacity: (state, action) => {
			state.textOpacity = action.payload;
		},
	},
});

export const { setTextOpacity } = textOpacitySlice.actions;

export const textOpacitySliceReducer = textOpacitySlice.reducer;
