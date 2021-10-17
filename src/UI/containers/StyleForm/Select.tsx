import { capitalize } from "const";
import React from "react";
import { useDispatch } from "react-redux";

import classes from "./Select.module.scss";

export const Select = ({ id, type, modifyStyle }) => {
	const dispatch = useDispatch();
	return (
		<div className={classes.select} key={id}>
			<label htmlFor={id}>{capitalize(id)}</label>
			<div className={classes.selectElement}>
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
};
