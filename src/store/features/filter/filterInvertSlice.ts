import { createSlice } from "@reduxjs/toolkit";

export const filterInvertSlice = createSlice({
	name: "filterInvert",
	initialState: {
		invert: 0,
	},
	reducers: {
		setFilterInvert: (state, action) => {
			state.invert = action.payload;
		},
	},
});

export const { setFilterInvert } = filterInvertSlice.actions;

export const filterInvertReducer = filterInvertSlice.reducer;
