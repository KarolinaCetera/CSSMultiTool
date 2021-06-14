import React from "react";
import { useDispatch } from "react-redux";
import { borderProps, borderTypeOptions } from "const";
import { placeInput, placeSelect } from "utils";

export const BorderControls: React.FC = () => {
	const dispatch = useDispatch();

	const placeProperForm = () =>
		borderProps.map(({ value, func }) => {
			switch (value) {
				case "type":
					return placeSelect(value, borderTypeOptions, func, dispatch);
				case "color":
					return placeInput(value, "color", func, dispatch);
				default:
					return placeInput(value, "number", func, dispatch);
			}
		});

	return <form>{placeProperForm()}</form>;
};
