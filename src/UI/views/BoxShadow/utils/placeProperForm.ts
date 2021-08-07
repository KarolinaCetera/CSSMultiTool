import { boxShadowProps } from "const";
import { useBoxShadowProps } from "hooks";
import { Dispatch } from "react";
import { Input, Slider } from "../../../components";
export const placeProperForm = (
	dispatch: Dispatch<any>,
): (JSX.Element | false | undefined | null)[] => {
	const boxShadowStyles = useBoxShadowProps();

	return boxShadowProps.map(({ id, modifyStyle }) => {
		switch (id) {
			case "blur":
				return Slider({
					id,
					value: boxShadowStyles.blur,
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
					value: boxShadowStyles.horizontal,
					step: 1,
					min: -200,
					max: 200,
					modifyStyle,
					dispatch,
				});
			case "opacity":
				return Slider({
					id,
					value: boxShadowStyles.opacity,
					step: 0.1,
					min: 0,
					max: 1,
					modifyStyle,
					dispatch,
				});
			case "spread":
				return Slider({
					id,
					value: boxShadowStyles.spread,
					step: 1,
					min: -200,
					max: 200,
					modifyStyle,
					dispatch,
				});
			case "vertical":
				return Slider({
					id,
					value: boxShadowStyles.vertical,
					step: 1,
					min: -200,
					max: 200,
					modifyStyle,
					dispatch,
				});
		}
	});
};
