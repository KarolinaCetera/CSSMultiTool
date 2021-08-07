import React from "react";
import classes from "../Form.module.scss";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { styleOption } from "typings";
import { capitalize } from "const";

interface SelectComponentProps {
	id: string;
	type: styleOption[];
	modifyStyle: ActionCreatorWithPayload<any>;
	dispatch;
}

export const Select: React.FC<SelectComponentProps> = ({
	id,
	type,
	modifyStyle,
	dispatch,
}: SelectComponentProps) => (
	<div className={classes.select}>
		<label htmlFor={id}>{capitalize(id)}</label>
		<div>
			<select
				name={id}
				id={id}
				onChange={(e) => {
					e.preventDefault();
					dispatch(modifyStyle(e.target.value));
				}}
			>
				{type.map(({ name, value }) => (
					<option key={value} value={value}>
						{name}
					</option>
				))}
			</select>
		</div>
	</div>
);
