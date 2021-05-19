import React from "react";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { Input, Select, Slider } from "UI";

export const placeInput = (
	value: string,
	type: string,
	func: ActionCreatorWithPayload<string>,
	dispatch: Dispatch<any>,
) => (
	<Input
		id={value}
		type={type}
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

export const placeSlider = (
	id: string,
	value: number,
	step: number,
	min: number,
	max: number,
	func: ActionCreatorWithPayload<string>,
	dispatch: Dispatch<any>,
) => (
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
