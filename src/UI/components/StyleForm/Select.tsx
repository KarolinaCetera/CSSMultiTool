import React from "react";

export const Select = ({ name, dispatch, modifyStyle, options, id }) => {
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
