import { createSlice } from "@reduxjs/toolkit";

export const filterContrastSlice = createSlice({
	name: "filterContrast",
	initialState: {
		contrast: 0,
	},
	reducers: {
		setFilterContrast: (state, action) => {
			state.contrast = action.payload;
		},
	},
});

export const { setFilterContrast } = filterContrastSlice.actions;

export const filterContrastReducer = filterContrastSlice.reducer;
