import { createSlice } from "@reduxjs/toolkit";

export const borderRadiusBLSlice = createSlice({
	name: "borderRadius",
	initialState: {
		radiusBL: 0,
	},
	reducers: {
		setBorderRadiusBL: (state, action) => {
			state.radiusBL = action.payload;
		},
	},
});

export const { setBorderRadiusBL } = borderRadiusBLSlice.actions;

export const borderRadiusBLReducer = borderRadiusBLSlice.reducer;
