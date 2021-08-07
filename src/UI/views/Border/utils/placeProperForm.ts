import { borderProps } from "const";
import { Input, Select, Slider } from "../../../components";
import {
	useBorderPropsAll,
	useRadiusMode,
	userBorderRadiusCorner,
} from "hooks";
import { borderTypeOptions as type } from "const";
import { Dispatch } from "react";

export const placeProperForm = (
	dispatch: Dispatch<any>,
): (JSX.Element | false | undefined | null)[] => {
	const borderStyles = useBorderPropsAll();
	const borderRadius = userBorderRadiusCorner();

	const { mode } = useRadiusMode();

	return borderProps.map(({ id, modifyStyle }) => {
		switch (id) {
			case "type":
				return Select({
					id,
					type,
					modifyStyle,
					dispatch,
				});
			case "color":
				return Input({ id, type: "color", modifyStyle, dispatch });
			case "width":
				return Slider({
					id,
					value: borderStyles.width,
					step: 1,
					min: 0,
					max: 100,
					modifyStyle,
					dispatch,
				});
			case "radiusTL":
				return (
					mode === "separate" &&
					Slider({
						id: "Top left",
						value: borderRadius.TL,
						step: 1,
						min: 0,
						max: 100,
						modifyStyle,
						dispatch,
					})
				);
			case "radiusTR":
				return (
					mode === "separate" &&
					Slider({
						id: "Top right",
						value: borderRadius.TR,
						step: 1,
						min: 0,
						max: 250,
						modifyStyle,
						dispatch,
					})
				);
			case "radiusBR":
				return (
					mode === "separate" &&
					Slider({
						id: "Bottom right",
						value: borderRadius.BR,
						step: 1,
						min: 0,
						max: 250,
						modifyStyle,
						dispatch,
					})
				);
			case "radiusBL":
				return (
					mode === "separate" &&
					Slider({
						id: "Bottom left",
						value: borderRadius.BL,
						step: 1,
						min: 0,
						max: 250,
						modifyStyle,
						dispatch,
					})
				);
			case "radius":
				return (
					mode === "all" &&
					Slider({
						id,
						value: borderStyles.radius,
						step: 1,
						min: 0,
						max: 150,
						modifyStyle,
						dispatch,
					})
				);
		}
	});
};
