import React from "react";
import { useDispatch } from "react-redux";
import { dropShadowProps, filterProps } from "const";
import { placeInput } from "utils";

export const FilterControls: React.FC = () => {
	const dispatch = useDispatch();

	const placeDropShadowForm = (value, func) =>
		dropShadowProps.map(({ value, type }) =>
			placeInput(value, type, func, dispatch),
		);

	const placeProperForm = () =>
		filterProps.map(({ value, func }) => {
			switch (value) {
				case "dropShadow":
					return placeDropShadowForm(value, func);
				default:
					return placeInput(value, "number", func, dispatch);
			}
		});

	return <form>{placeProperForm()}</form>;
};
