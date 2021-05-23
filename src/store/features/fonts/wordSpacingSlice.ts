import { createSlice } from "@reduxjs/toolkit";

export const wordSpacingSlice = createSlice({
	name: "wordSpacing",
	initialState: {
		wordSpacing: 0,
	},
	reducers: {
		setWordSpacing: (state, action) => {
			state.wordSpacing = action.payload;
		},
	},
});

export const { setWordSpacing } = wordSpacingSlice.actions;
export const wordSpacingReducer = wordSpacingSlice.reducer;
