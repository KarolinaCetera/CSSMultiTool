import { createSlice } from "@reduxjs/toolkit";

export const borderWidthSlice = createSlice({
	name: "borderWidth",
	initialState: {
		width: 2,
	},
	reducers: {
		setBorderWidth: (state, action) => {
			state.width = action.payload;
		},
	},
});

export const { setBorderWidth } = borderWidthSlice.actions;

export const borderWidthReducer = borderWidthSlice.reducer;
