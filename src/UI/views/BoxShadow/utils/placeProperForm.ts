import { boxShadowProps } from "const";
import { placeInput, placeSlider } from "utils";
import { useBoxShadowProps } from "hooks";
import { Dispatch } from "react";

export const placeProperForm = (
	dispatch: Dispatch<any>,
): (JSX.Element | false | undefined)[] => {
	const boxShadowStyles = useBoxShadowProps();

	return boxShadowProps.map(({ value, func }) => {
		switch (value) {
			case "blur":
				return placeSlider(
					value,
					boxShadowStyles.blur,
					1,
					0,
					300,
					func,
					dispatch,
				);
			case "color":
				return placeInput(value, "color", func, dispatch);
			case "horizontal":
				return placeSlider(
					value,
					boxShadowStyles.horizontal,
					1,
					-200,
					200,
					func,
					dispatch,
				);
			case "opacity":
				return placeSlider(
					value,
					boxShadowStyles.opacity,
					0.1,
					0,
					1,
					func,
					dispatch,
				);
			case "spread":
				return placeSlider(
					value,
					boxShadowStyles.spread,
					1,
					-200,
					200,
					func,
					dispatch,
				);
			case "vertical":
				return placeSlider(
					value,
					boxShadowStyles.vertical,
					1,
					-200,
					200,
					func,
					dispatch,
				);
		}
	});
};
