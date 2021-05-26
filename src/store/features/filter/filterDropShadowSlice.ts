import { createSlice } from "@reduxjs/toolkit";

export const filterDropShadowSlice = createSlice({
	name: "filterDropShadow",
	initialState: {
		dropShadow: {
			offsetX: 0,
			offsetY: 0,
			blurRadius: 0,
			color: "black",
		},
	},
	reducers: {
		setFilterDropShadow: (state, action) => {
			state.dropShadow = action.payload;
		},
	},
});

export const { setFilterDropShadow } = filterDropShadowSlice.actions;

export const filterDropShadowReducer = filterDropShadowSlice.reducer;
