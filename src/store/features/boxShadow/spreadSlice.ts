import { createSlice } from "@reduxjs/toolkit";

export const spreadSlice = createSlice({
	name: "boxShadowSpread",
	initialState: {
		spread: 0,
	},
	reducers: {
		setSpread: (state, action) => {
			state.spread = action.payload;
		},
	},
});

export const { setSpread } = spreadSlice.actions;

export const spreadSliceReducer = spreadSlice.reducer;
