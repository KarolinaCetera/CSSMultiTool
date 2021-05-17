import React from "react";
import { useDispatch } from "react-redux";
import { placeInput, placeSelect } from "../../../utils";
import { borderProps, options } from "../../../const";

export const BorderControls = () => {
	const dispatch = useDispatch();

	return (
		<form action="">
			{borderProps.map(({ func, data, value }) => {
				if (value === "type") {
					return placeSelect(value, data, options, func, dispatch);
				} else {
					return placeInput(value, data, func, dispatch);
				}
			})}
		</form>
	);
};
