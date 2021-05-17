import { createSlice } from "@reduxjs/toolkit";

export const horizontalSlice = createSlice({
	name: "boxShadowHorizontalLength",
	initialState: {
		horizontal: 25,
	},
	reducers: {
		setHorizontal: (state, action) => {
			state.horizontal = action.payload;
		},
	},
});

export const { setHorizontal } = horizontalSlice.actions;

export const horizontalSliceReducer = horizontalSlice.reducer;
