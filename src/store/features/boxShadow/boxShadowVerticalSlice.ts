import { createSlice } from "@reduxjs/toolkit";

export const boxShadowVerticalSlice = createSlice({
	name: "boxShadowVerticalLength",
	initialState: {
		vertical: 25,
	},
	reducers: {
		setBoxShadowVertical: (state, action) => {
			state.vertical = action.payload;
		},
	},
});

export const { setBoxShadowVertical } = boxShadowVerticalSlice.actions;

export const boxShadowVerticalReducer = boxShadowVerticalSlice.reducer;
