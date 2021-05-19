import React from "react";
import { useDispatch } from "react-redux";
import { placeInput, placeSelect } from "utils";
import { borderProps, borderTypeOptions } from "const";

export const BorderControls = () => {
	const dispatch = useDispatch();

	return (
		<form>
			{borderProps.map(({ value, func }) => {
				if (value === "type") {
					return placeSelect(value, borderTypeOptions, func, dispatch);
				} else if (value === "radius") {
					return placeInput(value, "number", func, dispatch);
				} else {
					return placeInput(value, "text", func, dispatch);
				}
			})}
		</form>
	);
};
