import { createSlice } from "@reduxjs/toolkit";

export const filterBlurSlice = createSlice({
	name: "filterBlur",
	initialState: {
		blur: 0,
	},
	reducers: {
		setFilterBlur: (state, action) => {
			state.blur = action.payload;
		},
	},
});

export const { setFilterBlur } = filterBlurSlice.actions;

export const filterBlurReducer = filterBlurSlice.reducer;
