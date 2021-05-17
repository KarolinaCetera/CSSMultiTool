import { createSlice } from "@reduxjs/toolkit";

export const shadowColorSlice = createSlice({
	name: "boxShadowColor",
	initialState: {
		shadowColor: "#000000",
	},
	reducers: {
		setShadowColor: (state, action) => {
			state.shadowColor = action.payload;
		},
	},
});

export const { setShadowColor } = shadowColorSlice.actions;

export const shadowColorSliceReducer = shadowColorSlice.reducer;
