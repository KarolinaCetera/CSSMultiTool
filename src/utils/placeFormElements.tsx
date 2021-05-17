import React from "react";
import { Input, Select, Slider } from "../UI/components";

export const placeInput = (id, data, func, dispatch) => (
	<Input
		id={id}
		type={data}
		key={`${func}`}
		dispatch={dispatch}
		modifyStyle={func}
	/>
);

export const placeSelect = (value, data, options, func, dispatch) => (
	<Select
		id={value}
		name={data}
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
