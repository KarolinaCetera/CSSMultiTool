import React from "react";
import { useDispatch } from "react-redux";
import { dropShadowProps, filterProps } from "const";
import { Input } from "../../components";

export const FilterControls: React.FC = () => {
	const dispatch = useDispatch();

	const placeDropShadowForm = (id, modifyStyle) =>
		dropShadowProps.map(({ id, type }) =>
			Input({ id, type, modifyStyle, dispatch }),
		);

	const placeProperForm = () =>
		filterProps.map(({ id, modifyStyle }) => {
			switch (id) {
				case "dropShadow":
					return placeDropShadowForm(id, modifyStyle);
				default:
					return Input({ id, type: "number", modifyStyle, dispatch });
			}
		});

	return <form>{placeProperForm()}</form>;
};
