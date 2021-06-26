import React from "react";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { dispatchGeneric } from "typings";
import { capitalize } from "const";

interface SliderComponentProps {
	id: string;
	value: number;
	step: number;
	min: number;
	max: number;
	modifyStyle: ActionCreatorWithPayload<any>;
	dispatch: Dispatch<dispatchGeneric>;
}

export const Slider: React.FC<SliderComponentProps> = ({
	id,
	value,
	step,
	min,
	max,
	modifyStyle,
	dispatch,
}: SliderComponentProps) => (
	<div>
		<label htmlFor={id}>{capitalize(id)}</label>
		<input
			id={id}
			type="range"
			value={value}
			step={step}
			min={min}
			max={max}
			onChange={(e) => {
				e.preventDefault();
				dispatch(modifyStyle(e.target.value));
			}}
		/>
		<div>{value}</div>
	</div>
);
