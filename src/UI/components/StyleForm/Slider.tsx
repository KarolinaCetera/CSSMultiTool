import { capitalize } from "const";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { FormHookProps } from "typings";

import classes from "./Slider.module.scss";

export const Slider: React.FC<FormHookProps> = ({
	id,
	value,
	step,
	min,
	max,
	modifyStyle,
}) => {
	const dispatch = useDispatch();
	const onSliderChange = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		dispatch(modifyStyle(e.target.value));
	};

	return (
		<div className={classes.slider} key={id}>
			<div className={classes.inputElement}>
				<label htmlFor={id}>{capitalize(id)}</label>
				<div>
					<input
						type="number"
						value={value}
						step={step}
						min={min}
						max={max}
						onChange={onSliderChange}
					/>
					<span>px</span>
				</div>
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
					onChange={onSliderChange}
				/>
			</div>
		</div>
	);
};
