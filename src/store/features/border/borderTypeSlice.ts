import { createSlice } from "@reduxjs/toolkit";

export const borderTypeSlice = createSlice({
	name: "borderType",
	initialState: {
		type: "solid",
	},
	reducers: {
		setBorderType: (state, action) => {
			state.type = action.payload;
		},
	},
});

export const { setBorderType } = borderTypeSlice.actions;

export const borderTypeReducer = borderTypeSlice.reducer;
