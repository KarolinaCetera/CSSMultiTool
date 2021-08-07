import {
	fontProps,
	fontStyleOptions as styleType,
	fontWeightOptions as weightType,
	textTransformOptions as transformType,
} from "../../../../const";
import { Input, Select, Slider } from "../../../containers/Form/StyleForm";
import { useFontProps } from "../../../../hooks";
import { Dispatch } from "react";

export const placeProperForm = (
	dispatch: Dispatch<any>,
): (JSX.Element | false | undefined | null)[] => {
	const fontStyles = useFontProps();
	return fontProps.map(({ id, modifyStyle }) => {
		switch (id) {
			case "color":
				return Input({ id, type: "color", modifyStyle, dispatch });
			case "size":
				return Slider({
					id,
					value: fontStyles.fontSize,
					step: 1,
					min: 0,
					max: 300,
					modifyStyle,
					dispatch,
				});
			case "style":
				return Select({
					id,
					type: styleType,
					modifyStyle,
					dispatch,
				});
			case "weight":
				return Select({
					id,
					type: weightType,
					modifyStyle,
					dispatch,
				});
			case "letterSpacing":
				return Slider({
					id,
					value: fontStyles.letterSpacing,
					step: 1,
					min: 0,
					max: 300,
					modifyStyle,
					dispatch,
				});
			case "lineHeight":
				return Slider({
					id,
					value: fontStyles.lineHeight,
					step: 0.1,
					min: 0,
					max: 50,
					modifyStyle,
					dispatch,
				});
			case "textTransform":
				return Select({
					id,
					type: transformType,
					modifyStyle,
					dispatch,
				});
			case "wordSpacing":
				return Slider({
					id,
					value: fontStyles.wordSpacing,
					step: 1,
					min: 0,
					max: 300,
					modifyStyle,
					dispatch,
				});
		}
	});
};
