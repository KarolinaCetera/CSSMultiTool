import { createSlice } from "@reduxjs/toolkit";

export const widthSlice = createSlice({
	name: "borderWidth",
	initialState: {
		width: 2,
	},
	reducers: {
		setWidth: (state, action) => {
			state.width = action.payload;
		},
	},
});

export const { setWidth } = widthSlice.actions;

export const widthSliceReducer = widthSlice.reducer;
