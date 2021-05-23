import { createSlice } from "@reduxjs/toolkit";

export const letterSpacingSlice = createSlice({
	name: "letterSpacing",
	initialState: {
		letterSpacing: 0,
	},
	reducers: {
		setLetterSpacing: (state, action) => {
			state.letterSpacing = action.payload;
		},
	},
});

export const { setLetterSpacing } = letterSpacingSlice.actions;
export const letterSpacingReducer = letterSpacingSlice.reducer;
