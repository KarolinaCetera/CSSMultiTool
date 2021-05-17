import { createSlice } from "@reduxjs/toolkit";

export const opacitySlice = createSlice({
	name: "boxShadowOpacity",
	initialState: {
		opacity: 0.75,
	},
	reducers: {
		setOpacity: (state, action) => {
			state.opacity = action.payload;
		},
	},
});

export const { setOpacity } = opacitySlice.actions;

export const opacitySliceReducer = opacitySlice.reducer;
