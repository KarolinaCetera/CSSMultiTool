import { borderProps } from "const";
import { placeInput, placeSelect, placeSlider } from "utils";
import {
	useBorderPropsAll,
	useRadiusMode,
	userBorderRadiusCorner,
} from "hooks";
import { borderTypeOptions } from "const";
import { Dispatch } from "react";

export const placeProperForm = (
	dispatch: Dispatch<any>,
): (JSX.Element | false | undefined)[] => {
	const borderStyles = useBorderPropsAll();
	const borderRadius = userBorderRadiusCorner();

	const { mode } = useRadiusMode();

	/** Argumenty place powinny być obiektami */
	return borderProps.map(({ value, func }) => {
		switch (value) {
			case "type":
				return placeSelect(value, borderTypeOptions, func, dispatch);
			case "color":
				return placeInput(value, "color", func, dispatch);
			case "width":
				return placeSlider(
					value,
					borderStyles.width,
					1,
					0,
					100,
					func,
					dispatch,
				);
			case "radiusTL":
				return (
					mode === "separate" &&
					placeSlider("Top left", borderRadius.TL, 1, 0, 100, func, dispatch)
				);
			case "radiusTR":
				return (
					mode === "separate" &&
					placeSlider("Top right", borderRadius.TR, 1, 0, 250, func, dispatch)
				);
			case "radiusBR":
				return (
					mode === "separate" &&
					placeSlider(
						"Bottom right",
						borderRadius.BR,
						1,
						0,
						250,
						func,
						dispatch,
					)
				);
			case "radiusBL":
				return (
					mode === "separate" &&
					placeSlider("Bottom left", borderRadius.BL, 1, 0, 250, func, dispatch)
				);
			case "radius":
				return (
					mode === "all" &&
					placeSlider(value, borderStyles.radius, 1, 0, 150, func, dispatch)
				);
		}
	});
};
