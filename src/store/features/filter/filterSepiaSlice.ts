import { createSlice } from "@reduxjs/toolkit";

export const filterSepiaSlice = createSlice({
	name: "filterSepia",
	initialState: {
		sepia: 0,
	},
	reducers: {
		setFilterSepia: (state, action) => {
			state.sepia = action.payload;
		},
	},
});

export const { setFilterSepia } = filterSepiaSlice.actions;

export const filterSepiaReducer = filterSepiaSlice.reducer;
