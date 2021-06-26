import React from "react";
import { useDispatch } from "react-redux";
import { borderProps, borderTypeOptions } from "const";
import { placeInput, placeSelect, placeSlider } from "utils";
import {
	useBorderRadius,
	useBorderRadiusBL,
	useBorderRadiusBR,
	useBorderRadiusTL,
	useBorderRadiusTR,
	useBorderWidth,
} from "hooks";
import { Form } from "../../containers";

export const BorderControls: React.FC = () => {
	const dispatch = useDispatch();
	const width = useBorderWidth();
	const radius = useBorderRadius();
	const radiusTL = useBorderRadiusTL();
	const radiusTR = useBorderRadiusTR();
	const radiusBR = useBorderRadiusBR();
	const radiusBL = useBorderRadiusBL();

	const placeProperForm = () =>
		borderProps.map(({ value, func }) => {
			switch (value) {
				case "type":
					return placeSelect(value, borderTypeOptions, func, dispatch);
				case "color":
					return placeInput(value, "color", func, dispatch);
				case "width":
					return placeSlider(value, width, 1, 0, 100, func, dispatch);
				case "radiusTL":
					return placeSlider("Top left", radiusTL, 1, 0, 100, func, dispatch);
				case "radiusTR":
					return placeSlider("Top right", radiusTR, 1, 0, 100, func, dispatch);
				case "radiusBR":
					return placeSlider(
						"Bottom right",
						radiusBR,
						1,
						0,
						100,
						func,
						dispatch,
					);
				case "radiusBL":
					return placeSlider(
						"Bottom left",
						radiusBL,
						1,
						0,
						100,
						func,
						dispatch,
					);
				default:
					return placeSlider(value, radius, 1, 0, 150, func, dispatch);
			}
		});

	return <Form>{placeProperForm()}</Form>;
};
