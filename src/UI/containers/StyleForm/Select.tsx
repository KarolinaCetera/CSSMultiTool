import React from "react";
import classes from "../Form/Form.module.scss";
import { capitalize } from "const";
import { useDispatch } from "react-redux";

export const Select = ({ id, type, modifyStyle }) => {
	const dispatch = useDispatch();
	return (
		<div className={classes.select} key={id}>
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
};
