import React, { Dispatch } from "react";
import classes from "../Form.module.scss";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { capitalize } from "const";

interface InputComponentProps {
	id: string;
	type: string;
	modifyStyle: ActionCreatorWithPayload<any>;
	dispatch: Dispatch<any>;
}

export const Input: React.FC<InputComponentProps> = ({
	id,
	type,
	modifyStyle,
	dispatch,
}: InputComponentProps) => (
	<div className={classes.input}>
		<label htmlFor={id}>{capitalize(type)}</label>
		<input
			id={id}
			type={type}
			onChange={(e) => {
				e.preventDefault();
				dispatch(modifyStyle(e.target.value));
			}}
		/>
	</div>
);
