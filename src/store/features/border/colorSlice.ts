import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
	name: "borderColor",
	initialState: {
		color: "#000000",
	},
	reducers: {
		setColor: (state, action) => {
			state.color = action.payload;
		},
	},
});

export const { setColor } = colorSlice.actions;

export const colorSliceReducer = colorSlice.reducer;
