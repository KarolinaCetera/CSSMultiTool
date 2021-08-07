import React from "react";
import { useDispatch } from "react-redux";
import {
	useTextShadowBlur,
	useTextShadowHorizontal,
	useTextShadowOpacity,
	useTextShadowVertical,
} from "hooks";
import { textShadowProps } from "const";
import { Input, Slider } from "../../components";

export const TextShadowControls: React.FC = () => {
	const dispatch = useDispatch();

	const blur = useTextShadowBlur();
	const horizontal = useTextShadowHorizontal();
	const opacity = useTextShadowOpacity();
	const vertical = useTextShadowVertical();

	const placeProperForm = () =>
		textShadowProps.map(({ id, modifyStyle }) => {
			switch (id) {
				case "blur":
					return Slider({
						id,
						value: blur,
						step: 1,
						min: 0,
						max: 300,
						modifyStyle,
						dispatch,
					});
				case "color":
					return Input({ id, type: "color", modifyStyle, dispatch });
				case "horizontal":
					return Slider({
						id,
						value: horizontal,
						step: 1,
						min: -200,
						max: 200,
						modifyStyle,
						dispatch,
					});
				case "opacity":
					return Slider({
						id,
						value: opacity,
						step: 0.1,
						min: 0,
						max: 1,
						modifyStyle,
						dispatch,
					});
				case "vertical":
					return Slider({
						id,
						value: vertical,
						step: 1,
						min: -200,
						max: 200,
						modifyStyle,
						dispatch,
					});
			}
		});

	return <div>{placeProperForm()}</div>;
};
