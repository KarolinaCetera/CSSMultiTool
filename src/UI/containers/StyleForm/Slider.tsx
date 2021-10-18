import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { capitalize } from "const";
import React from "react";
import { useDispatch } from "react-redux";

import classes from "./Slider.module.scss";

interface SliderComponentProps {
	id: string | undefined;
	value;
	step: number;
	min: number;
	max: number;
	modifyStyle: ActionCreatorWithPayload<string>;
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
			<div className={classes.inputElement}>
				<label htmlFor={id}>{capitalize(id)}</label>
				<input
					type="number"
					value={value}
					step={step}
					min={min}
					max={max}
					onChange={(e) => {
						e.preventDefault();
						dispatch(modifyStyle(e.target.value));
					}}
				/>
			</div>
			<div className={classes.sliderElement}>
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
			</div>
		</div>
	);
};
