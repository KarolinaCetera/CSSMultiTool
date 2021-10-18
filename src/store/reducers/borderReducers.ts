import { combineReducers } from "@reduxjs/toolkit";

import {
	borderColorReducer,
	borderTypeReducer,
	borderWidthReducer,
} from "../features";

export const borderReducers = combineReducers({
	borderWidth: borderWidthReducer,
	borderType: borderTypeReducer,
	borderColor: borderColorReducer,
});
