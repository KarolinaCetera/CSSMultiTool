import React from "react";
import { useDispatch } from "react-redux";
import { boxShadowProps } from "../../../const";
import { placeInput, placeSlider } from "../../../utils";
import {
	useBoxShadowBlur,
	useBoxShadowHorizontal,
	useBoxShadowOpacity,
	useBoxShadowSpread,
	useBoxShadowVertical,
} from "../../../hooks";

export const BoxShadowControls = () => {
	const dispatch = useDispatch();

	const blur = useBoxShadowBlur();
	const horizontal = useBoxShadowHorizontal();
	const opacity = useBoxShadowOpacity();
	const spread = useBoxShadowSpread();
	const vertical = useBoxShadowVertical();

	const placeProperForm = () => {
		return boxShadowProps.map(({ value, func }) => {
			switch (value) {
				case "blur":
					return placeSlider(value, blur, 1, 0, 300, func, dispatch);
				case "color":
					return placeInput(value, "text", func, dispatch);
				case "horizontal":
					return placeSlider(value, horizontal, 1, -200, 200, func, dispatch);
				case "opacity":
					return placeSlider(value, opacity, 0.1, 0, 1, func, dispatch);
				case "spread":
					return placeSlider(value, spread, 1, -200, 200, func, dispatch);
				case "vertical":
					return placeSlider(value, vertical, 1, -200, 200, func, dispatch);
			}
		});
	};

	return <div>{placeProperForm()}</div>;
};
