import React from "react";
import { Input, Select, Slider } from "UI";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { styleOption } from "../../typings";

export const placeInput = (
	value: string,
	func: ActionCreatorWithPayload<string>,
	dispatch: Dispatch<any>,
) => (
	<Input
		id={value}
		type={value}
		key={`${func}`}
		dispatch={dispatch}
		modifyStyle={func}
	/>
);

export const placeSelect = (
	value: string,
	options: styleOption[],
	func: ActionCreatorWithPayload<string>,
	dispatch: Dispatch<any>,
) => (
	<Select
		id={value}
		name={value}
		options={options}
		key={`${func}`}
		dispatch={dispatch}
		modifyStyle={func}
	/>
);

export const placeSlider = (id, value, step, min, max, func, dispatch) => (
	<Slider
		id={id}
		value={value}
		step={step}
		min={min}
		max={max}
		key={`${func}`}
		dispatch={dispatch}
		modifyStyle={func}
	/>
);
