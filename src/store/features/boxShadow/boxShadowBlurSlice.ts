import { createSlice } from "@reduxjs/toolkit";

export const boxShadowBlurSlice = createSlice({
	name: "boxShadowBlur",
	initialState: {
		blur: 0,
	},
	reducers: {
		setBoxShadowBlur: (state, action) => {
			state.blur = action.payload;
		},
	},
});

export const { setBoxShadowBlur } = boxShadowBlurSlice.actions;

export const boxShadowBlurReducer = boxShadowBlurSlice.reducer;
