import { createSlice } from "@reduxjs/toolkit";

export const filterGreyScaleSlice = createSlice({
	name: "filterGreyScale",
	initialState: {
		greyScale: 0,
	},
	reducers: {
		setFilterGreyScale: (state, action) => {
			state.greyScale = action.payload;
		},
	},
});

export const { setFilterGreyScale } = filterGreyScaleSlice.actions;

export const filterGreyScaleReducer = filterGreyScaleSlice.reducer;
