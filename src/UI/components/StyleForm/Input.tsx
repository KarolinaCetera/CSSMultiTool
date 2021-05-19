import React from "react";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";

interface InputComponentProps {
	id: string;
	type: string;
	modifyStyle: ActionCreatorWithPayload<any>;
	dispatch: Dispatch<any>;
}

export const Input = ({
	id,
	type,
	modifyStyle,
	dispatch,
}: InputComponentProps) => (
	<div>
		<label htmlFor={id}>{id.toUpperCase()}</label>
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
