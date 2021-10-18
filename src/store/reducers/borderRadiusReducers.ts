import { combineReducers } from "@reduxjs/toolkit";

import {
	borderRadiusBLReducer,
	borderRadiusBRReducer,
	borderRadiusTLReducer,
	borderRadiusTRReducer,
} from "../features";

export const borderRadiusReducers = combineReducers({
	borderRadiusTL: borderRadiusTLReducer,
	borderRadiusTR: borderRadiusTRReducer,
	borderRadiusBR: borderRadiusBRReducer,
	borderRadiusBL: borderRadiusBLReducer,
});
