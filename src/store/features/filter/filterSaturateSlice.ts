import { createSlice } from "@reduxjs/toolkit";

export const filterSaturateSlice = createSlice({
	name: "filterSaturate",
	initialState: {
		saturate: 0,
	},
	reducers: {
		setFilterSaturate: (state, action) => {
			state.saturate = action.payload;
		},
	},
});

export const { setFilterSaturate } = filterSaturateSlice.actions;

export const filterSaturateReducer = filterSaturateSlice.reducer;
