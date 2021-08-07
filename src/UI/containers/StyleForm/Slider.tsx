import React from "react";
import classes from "../Form/Form.module.scss";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { capitalize } from "const";
import { useDispatch } from "react-redux";

interface SliderComponentProps {
	id: string;
	value;
	step: number;
	min: number;
	max: number;
	modifyStyle: ActionCreatorWithPayload<any>;
}

export const Slider: React.FC<SliderComponentProps> = ({
	id,
	value,
	step,
	min,
	max,
	modifyStyle,
}: SliderComponentProps) => {
	const dispatch = useDispatch();

	return (
		<div className={classes.slider} key={id}>
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
};
