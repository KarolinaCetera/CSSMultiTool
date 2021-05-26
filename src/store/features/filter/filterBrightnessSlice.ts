import { createSlice } from "@reduxjs/toolkit";

export const filterBrightnessSlice = createSlice({
	name: "filterBrightness",
	initialState: {
		brightness: 0,
	},
	reducers: {
		setFilterBrightness: (state, action) => {
			state.brightness = action.payload;
		},
	},
});

export const { setFilterBrightness } = filterBrightnessSlice.actions;

export const filterBrightnessReducer = filterBrightnessSlice.reducer;
