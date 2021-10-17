import { combineReducers } from "@reduxjs/toolkit";

import {
	borderColorReducer,
	borderRadiusBLReducer,
	borderRadiusBRReducer,
	borderRadiusReducer,
	borderRadiusTLReducer,
	borderRadiusTRReducer,
	borderTypeReducer,
	borderWidthReducer,
} from "../features";

export const borderReducers = combineReducers({
	borderWidth: borderWidthReducer,
	borderType: borderTypeReducer,
	borderColor: borderColorReducer,
	borderRadius: borderRadiusReducer,
	borderRadiusTL: borderRadiusTLReducer,
	borderRadiusTR: borderRadiusTRReducer,
	borderRadiusBR: borderRadiusBRReducer,
	borderRadiusBL: borderRadiusBLReducer,
});
