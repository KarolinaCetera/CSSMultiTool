import { createSlice } from "@reduxjs/toolkit";

export const boxShadowSpreadSlice = createSlice({
	name: "boxShadowSpread",
	initialState: {
		spread: 0,
	},
	reducers: {
		setBoxShadowSpread: (state, action) => {
			state.spread = action.payload;
		},
	},
});

export const { setBoxShadowSpread } = boxShadowSpreadSlice.actions;

export const boxShadowSpreadReducer = boxShadowSpreadSlice.reducer;
