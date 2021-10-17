import { createStore } from "@reduxjs/toolkit";

import { createReducer } from "./createReducer";

export const store = createStore(createReducer());
