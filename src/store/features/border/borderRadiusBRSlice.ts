import { createSlice } from "@reduxjs/toolkit";

export const borderRadiusBRSlice = createSlice({
	name: "borderRadius",
	initialState: {
		radiusBR: 0,
	},
	reducers: {
		setBorderRadiusBR: (state, action) => {
			state.radiusBR = action.payload;
		},
	},
});

export const { setBorderRadiusBR } = borderRadiusBRSlice.actions;

export const borderRadiusBRReducer = borderRadiusBRSlice.reducer;
