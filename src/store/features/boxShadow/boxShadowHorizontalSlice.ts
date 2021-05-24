import { createSlice } from "@reduxjs/toolkit";

export const boxShadowHorizontalSlice = createSlice({
	name: "boxShadowHorizontalLength",
	initialState: {
		horizontal: 25,
	},
	reducers: {
		setBoxShadowHorizontal: (state, action) => {
			state.horizontal = action.payload;
		},
	},
});

export const { setBoxShadowHorizontal } = boxShadowHorizontalSlice.actions;

export const boxShadowHorizontalReducer = boxShadowHorizontalSlice.reducer;
