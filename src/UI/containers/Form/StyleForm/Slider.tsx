import React from "react";
import classes from "../Form.module.scss";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { dispatchGeneric, hooksReturnType } from "typings";
import { capitalize } from "const";

interface SliderComponentProps {
	id: string;
	value;
	step: number;
	min: number;
	max: number;
	modifyStyle: ActionCreatorWithPayload<any>;
	dispatch;
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
	<div className={classes.slider}>
		<label htmlFor={id}>{capitalize(id)}</label>
		<div>
			{" "}
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
			<p className={classes.value}>{value}</p>
		</div>
	</div>
);
