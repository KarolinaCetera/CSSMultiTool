import React from "react";

export const Slider = ({
	id,
	value,
	step,
	min,
	max,
	dispatch,
	modifyStyle,
}) => {
	return (
		<div>
			<label htmlFor={id}>{id.toUpperCase()}</label>
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
};
