import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { capitalize } from "const";
import React from "react";
import { useDispatch } from "react-redux";

import classes from "./Input.module.scss";

interface InputComponentProps {
	id: string | undefined;
	type: string;
	modifyStyle: ActionCreatorWithPayload<string>;
}

export const Input: React.FC<InputComponentProps> = ({
	id,
	type,
	modifyStyle,
}: InputComponentProps) => {
	const dispatch = useDispatch();
	const onInputChange = (e) => {
		e.preventDefault();
		dispatch(modifyStyle(e.target.value));
	};

	return (
		<div className={classes.input} key={id}>
			<label htmlFor={id}>{capitalize(type)}</label>
			<input id={id} type={type} onChange={onInputChange} />
		</div>
	);
};
