import React from "react";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { Input, Select, Slider } from "UI";
import { dispatchGeneric, styleOption } from "typings";

export const placeInput: (value, type, func, dispatch) => JSX.Element = (
	value: string,
	type: string,
	func: ActionCreatorWithPayload<string>,
	dispatch: Dispatch<dispatchGeneric>,
) => (
	<Input
		id={value}
		type={type}
		key={`${func}`}
		dispatch={dispatch}
		modifyStyle={func}
	/>
);

export const placeSelect: (value, options, func, dispatch) => JSX.Element = (
	value: string,
	options: styleOption[],
	func: ActionCreatorWithPayload<string>,
	dispatch: Dispatch<dispatchGeneric>,
) => (
	<Select
		value={value}
		options={options}
		key={`${func}`}
		dispatch={dispatch}
		func={func}
	/>
);

export const placeSlider: (
	id,
	value,
	step,
	min,
	max,
	func,
	dispatch,
) => JSX.Element = (
	id: string,
	value: number,
	step: number,
	min: number,
	max: number,
	func: ActionCreatorWithPayload<string>,
	dispatch: Dispatch<dispatchGeneric>,
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
