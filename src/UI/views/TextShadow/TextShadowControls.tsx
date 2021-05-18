import React from "react";
import { useDispatch } from "react-redux";
import {
	useTextShadowBlur,
	useTextShadowHorizontal,
	useTextShadowOpacity,
	useTextShadowVertical,
} from "hooks";
import { textShadowProps } from "../../../const/textShadowStyles";
import { placeInput, placeSlider } from "../../../utils";

export const TextShadowControls = () => {
	const dispatch = useDispatch();

	const blur = useTextShadowBlur();
	const horizontal = useTextShadowHorizontal();
	const opacity = useTextShadowOpacity();
	const vertical = useTextShadowVertical();

	const placeProperForm = () => {
		return textShadowProps.map(({ value, func }) => {
			switch (value) {
				case "blur":
					return placeSlider(value, blur, 1, 0, 300, func, dispatch);
				case "color":
					return placeInput("text", func, dispatch);
				case "horizontal":
					return placeSlider(value, horizontal, 1, -200, 200, func, dispatch);
				case "opacity":
					return placeSlider(value, opacity, 0.1, 0, 1, func, dispatch);
				case "vertical":
					return placeSlider(value, vertical, 1, -200, 200, func, dispatch);
			}
		});
	};

	return <div>{placeProperForm()}</div>;
};
