import { createSlice } from "@reduxjs/toolkit";

export const radiusSlice = createSlice({
	name: "borderRadius",
	initialState: {
		radius: 0,
	},
	reducers: {
		setRadius: (state, action) => {
			state.radius = action.payload;
		},
	},
});

export const { setRadius } = radiusSlice.actions;

export const radiusSliceReducer = radiusSlice.reducer;
