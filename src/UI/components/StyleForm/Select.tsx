import React from "react";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { dispatchGeneric, styleOption } from "typings";

interface SelectComponentProps {
	value: string;
	options: styleOption[];
	func: ActionCreatorWithPayload<any>;
	dispatch: Dispatch<dispatchGeneric>;
}

export const Select: React.FC<SelectComponentProps> = ({
	value,
	options,
	func,
	dispatch,
}: SelectComponentProps) => (
	<div>
		<label htmlFor={value}>{value.toUpperCase()}</label>
		<select
			name={value}
			id={value}
			onChange={(e) => {
				e.preventDefault();
				dispatch(func(e.target.value));
			}}
		>
			{options.map(({ name, value }) => (
				<option key={value} value={value}>
					{name}
				</option>
			))}
		</select>
	</div>
);
