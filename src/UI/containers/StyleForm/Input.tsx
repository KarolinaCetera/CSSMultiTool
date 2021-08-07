import React from "react";
import classes from "../Form/Form.module.scss";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { capitalize } from "const";
import { useDispatch } from "react-redux";

interface InputComponentProps {
	id: string;
	type: string;
	modifyStyle: ActionCreatorWithPayload<any>;
}

export const Input: React.FC<InputComponentProps> = ({
	id,
	type,
	modifyStyle,
}: InputComponentProps) => {
	const dispatch = useDispatch();

	return (
		<div className={classes.input} key={id}>
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
};
