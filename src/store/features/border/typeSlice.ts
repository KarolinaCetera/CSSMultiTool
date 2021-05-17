import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
	name: "borderType",
	initialState: {
		type: "none",
	},
	reducers: {
		setType: (state, action) => {
			state.type = action.payload;
		},
	},
});

export const { setType } = typeSlice.actions;

export const typeSliceReducer = typeSlice.reducer;
