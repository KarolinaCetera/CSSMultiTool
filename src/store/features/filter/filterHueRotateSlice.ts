import { createSlice } from "@reduxjs/toolkit";

export const filterHueSlice = createSlice({
	name: "filterHue",
	initialState: {
		hue: 0,
	},
	reducers: {
		setFilterHue: (state, action) => {
			state.hue = action.payload;
		},
	},
});

export const { setFilterHue } = filterHueSlice.actions;

export const filterHueReducer = filterHueSlice.reducer;
