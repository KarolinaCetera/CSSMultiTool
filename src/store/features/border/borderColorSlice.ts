import { createSlice } from "@reduxjs/toolkit";

export const borderColorSlice = createSlice({
	name: "borderColor",
	initialState: {
		color: "#000000",
	},
	reducers: {
		setBorderColor: (state, action) => {
			state.color = action.payload;
		},
	},
});

export const { setBorderColor } = borderColorSlice.actions;

export const borderColorReducer = borderColorSlice.reducer;
