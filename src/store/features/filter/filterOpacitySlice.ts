import { createSlice } from "@reduxjs/toolkit";

export const filterOpacitySlice = createSlice({
	name: "filterOpacity",
	initialState: {
		opacity: 0,
	},
	reducers: {
		setFilterOpacity: (state, action) => {
			state.opacity = action.payload;
		},
	},
});

export const { setFilterOpacity } = filterOpacitySlice.actions;

export const filterOpacityReducer = filterOpacitySlice.reducer;
