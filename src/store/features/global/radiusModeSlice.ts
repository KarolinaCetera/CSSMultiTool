import { createSlice } from "@reduxjs/toolkit";

export const radiusModeSlice = createSlice({
	name: "radiusMode",
	initialState: {
		mode: "all",
	},
	reducers: {
		setRadiusMode: (state, action) => {
			state.mode = action.payload;
		},
	},
});

export const { setRadiusMode } = radiusModeSlice.actions;

export const radiusModeReducer = radiusModeSlice.reducer;
