import { createSlice } from "@reduxjs/toolkit";

export const boxShadowOpacitySlice = createSlice({
	name: "boxShadowOpacity",
	initialState: {
		opacity: 0.75,
	},
	reducers: {
		setBoxShadowOpacity: (state, action) => {
			state.opacity = action.payload;
		},
	},
});

export const { setBoxShadowOpacity } = boxShadowOpacitySlice.actions;

export const boxShadowOpacityReducer = boxShadowOpacitySlice.reducer;
