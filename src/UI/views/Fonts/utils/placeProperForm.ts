import {
	fontProps,
	fontStyleOptions as styleType,
	fontWeightOptions as weightType,
	textTransformOptions as transformType,
} from "const";
import { Input, Select, Slider } from "../../../containers";
import { useFontProps } from "hooks";

export const placeProperForm = (): (
	| JSX.Element
	| false
	| undefined
	| null
)[] => {
	const fontStyles = useFontProps();
	return fontProps.map(({ id, modifyStyle }) => {
		switch (id) {
			case "color":
				return Input({ id, type: "color", modifyStyle });
			case "size":
				return Slider({
					id,
					value: fontStyles.fontSize,
					step: 1,
					min: 0,
					max: 300,
					modifyStyle,
				});
			case "style":
				return Select({
					id,
					type: styleType,
					modifyStyle,
				});
			case "weight":
				return Select({
					id,
					type: weightType,
					modifyStyle,
				});
			case "letterSpacing":
				return Slider({
					id,
					value: fontStyles.letterSpacing,
					step: 1,
					min: 0,
					max: 300,
					modifyStyle,
				});
			case "lineHeight":
				return Slider({
					id,
					value: fontStyles.lineHeight,
					step: 0.1,
					min: 0,
					max: 50,
					modifyStyle,
				});
			case "textTransform":
				return Select({
					id,
					type: transformType,
					modifyStyle,
				});
			case "wordSpacing":
				return Slider({
					id,
					value: fontStyles.wordSpacing,
					step: 1,
					min: 0,
					max: 300,
					modifyStyle,
				});
		}
	});
};
