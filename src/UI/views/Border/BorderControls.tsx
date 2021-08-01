import React from "react";
import classes from "./BorderControls.module.scss";
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
	useRadiusMode,
} from "hooks";
import { Form } from "../../containers";
import RadiusControls from "./RadiusControls";

export const BorderControls: React.FC = () => {
	const dispatch = useDispatch();
	const width = useBorderWidth();
	const radius = useBorderRadius();
	const radiusTL = useBorderRadiusTL();
	const radiusTR = useBorderRadiusTR();
	const radiusBR = useBorderRadiusBR();
	const radiusBL = useBorderRadiusBL();

	const { mode } = useRadiusMode();

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
					return (
						mode === "separate" &&
						placeSlider("Top left", radiusTL, 1, 0, 100, func, dispatch)
					);
				case "radiusTR":
					return (
						mode === "separate" &&
						placeSlider("Top right", radiusTR, 1, 0, 250, func, dispatch)
					);
				case "radiusBR":
					return (
						mode === "separate" &&
						placeSlider("Bottom right", radiusBR, 1, 0, 250, func, dispatch)
					);
				case "radiusBL":
					return (
						mode === "separate" &&
						placeSlider("Bottom left", radiusBL, 1, 0, 250, func, dispatch)
					);
				case "radius":
					return (
						mode === "all" &&
						placeSlider(value, radius, 1, 0, 150, func, dispatch)
					);
			}
		});

	return (
		<div className={classes.borderControls}>
			<RadiusControls />
			<Form>{placeProperForm()}</Form>
		</div>
	);
};
