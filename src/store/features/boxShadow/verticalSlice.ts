import { createSlice } from "@reduxjs/toolkit";

export const verticalSlice = createSlice({
	name: "boxShadowVerticalLength",
	initialState: {
		vertical: 25,
	},
	reducers: {
		setVertical: (state, action) => {
			state.vertical = action.payload;
		},
	},
});

export const { setVertical } = verticalSlice.actions;

export const verticalSliceReducer = verticalSlice.reducer;
