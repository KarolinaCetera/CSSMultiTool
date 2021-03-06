import { capitalize } from "const";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { FormHookProps } from "typings";

import classes from "./Select.module.scss";

export const Select: React.FC<FormHookProps> = ({ id, type, modifyStyle }) => {
	const dispatch = useDispatch();
	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
		e.preventDefault();
		dispatch(modifyStyle(e.target.value));
	};

	return (
		<div className={classes.select} key={id}>
			<label htmlFor={id}>{capitalize(id)}</label>
			<div className={classes.selectElement}>
				<select name={id} id={id} onChange={onSelectChange}>
					{type?.map(({ name, value }) => (
						<option key={value} value={value}>
							{name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
