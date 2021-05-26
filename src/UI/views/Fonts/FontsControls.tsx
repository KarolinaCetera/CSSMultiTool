import React from "react";
import { useDispatch } from "react-redux";
import {
	useFontSize,
	useLetterSpacing,
	useLineHeight,
	useWordSpacing,
} from "hooks";
import {
	fontProps,
	fontStyleOptions,
	fontWeightOptions,
	textTransformOptions,
} from "const";
import { placeInput, placeSelect, placeSlider } from "utils";

export const FontsControls: React.FC = () => {
	const dispatch = useDispatch();

	const fontSize = useFontSize();
	const letterSpacing = useLetterSpacing();
	const lineHeight = useLineHeight();
	const wordSpacing = useWordSpacing();

	const placeProperForm = () =>
		fontProps.map(({ value, func }) => {
			switch (value) {
				case "color":
					return placeInput(value, "color", func, dispatch);
				case "size":
					return placeSlider(value, fontSize, 1, 0, 300, func, dispatch);
				case "style":
					return placeSelect(value, fontStyleOptions, func, dispatch);
				case "weight":
					return placeSelect(value, fontWeightOptions, func, dispatch);
				case "letterSpacing":
					return placeSlider(value, letterSpacing, 1, 0, 300, func, dispatch);
				case "lineHeight":
					return placeSlider(value, lineHeight, 0.1, 0, 50, func, dispatch);
				case "textTransform":
					return placeSelect(value, textTransformOptions, func, dispatch);
				case "wordSpacing":
					return placeSlider(value, wordSpacing, 1, 0, 300, func, dispatch);
			}
		});

	return <div>{placeProperForm()}</div>;
};
