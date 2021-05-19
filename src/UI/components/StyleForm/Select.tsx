import React from "react";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";

interface SelectComponentProps {
	id: string;
	name: string;
	options: styleOption[];
	modifyStyle: ActionCreatorWithPayload<any>;
	dispatch: Dispatch<any>;
}

export const Select = ({
	name,
	dispatch,
	modifyStyle,
	options,
	id,
}: SelectComponentProps) => {
	return (
		<div>
			<label htmlFor={id}>{id.toUpperCase()}</label>
			<select
				name={name}
				id={id}
				onChange={(e) => {
					e.preventDefault();
					dispatch(modifyStyle(e.target.value));
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
};
