import { createSlice } from "@reduxjs/toolkit";

export const borderRadiusSlice = createSlice({
	name: "borderRadius",
	initialState: {
		radius: 0,
	},
	reducers: {
		setBorderRadius: (state, action) => {
			state.radius = action.payload;
		},
	},
});

export const { setBorderRadius } = borderRadiusSlice.actions;

export const borderRadiusReducer = borderRadiusSlice.reducer;
