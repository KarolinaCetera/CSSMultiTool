import React from "react";
import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { dispatchGeneric } from "typings";

interface InputComponentProps {
	id: string;
	type: string;
	modifyStyle: ActionCreatorWithPayload<any>;
	dispatch: Dispatch<dispatchGeneric>;
}

export const Input: React.FC<InputComponentProps> = ({
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
