import { createSlice } from "@reduxjs/toolkit";

export const boxShadowColorSlice = createSlice({
	name: "boxShadowColor",
	initialState: {
		shadowColor: "#000000",
	},
	reducers: {
		setBoxShadowColor: (state, action) => {
			state.shadowColor = action.payload;
		},
	},
});

export const { setBoxShadowColor } = boxShadowColorSlice.actions;

export const boxShadowColorReducer = boxShadowColorSlice.reducer;
