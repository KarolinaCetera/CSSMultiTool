import React from "react";
import { useDispatch } from "react-redux";
import { borderProps, borderTypeOptions } from "const";
import { placeInput, placeSelect } from "utils";

export const BorderControls = () => {
	const dispatch = useDispatch();

	return (
		<form>
			{borderProps.map(({ value, func }) => {
				switch (value) {
					case "type":
						return placeSelect(value, borderTypeOptions, func, dispatch);
					case "color":
						return placeInput(value, "color", func, dispatch);
					default:
						return placeInput(value, "text", func, dispatch);
				}
			})}
		</form>
	);
};
