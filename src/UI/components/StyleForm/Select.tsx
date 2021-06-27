import React from "react";
import classes from "../../containers/Form/Form.module.scss";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { dispatchGeneric, styleOption } from "typings";
import { capitalize } from "const";

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
	<div className={classes.select}>
		<label htmlFor={value}>{capitalize(value)}</label>
		<div>
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
	</div>
);
