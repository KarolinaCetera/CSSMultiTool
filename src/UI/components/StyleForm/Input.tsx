import React from "react";

export const Input = ({ id, type, dispatch, modifyStyle }) => {
	return (
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
};
