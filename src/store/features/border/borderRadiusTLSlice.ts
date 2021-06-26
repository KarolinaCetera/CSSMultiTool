import { createSlice } from "@reduxjs/toolkit";

export const borderRadiusTLSlice = createSlice({
	name: "borderRadius",
	initialState: {
		radiusTL: 0,
	},
	reducers: {
		setBorderRadiusTL: (state, action) => {
			state.radiusTL = action.payload;
		},
	},
});

export const { setBorderRadiusTL } = borderRadiusTLSlice.actions;

export const borderRadiusTLReducer = borderRadiusTLSlice.reducer;
