import { combineReducers } from "@reduxjs/toolkit";
import { radiusModeReducer } from "../features";

export const globalReducers = combineReducers({
	radiusMode: radiusModeReducer,
});
