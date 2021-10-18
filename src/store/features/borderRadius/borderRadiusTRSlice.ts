import { createSlice } from "@reduxjs/toolkit";

export const borderRadiusTRSlice = createSlice({
	name: "borderRadius",
	initialState: {
		radiusTR: 0,
	},
	reducers: {
		setBorderRadiusTR: (state, action) => {
			state.radiusTR = action.payload;
		},
	},
});

export const { setBorderRadiusTR } = borderRadiusTRSlice.actions;

export const borderRadiusTRReducer = borderRadiusTRSlice.reducer;
