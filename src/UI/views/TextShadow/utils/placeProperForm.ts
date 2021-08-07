import { textShadowProps } from "../../../../const";
import { Input, Slider } from "../../../containers";
import { useTextShadowProps } from "hooks";

export const placeProperForm = (): (
	| JSX.Element
	| false
	| undefined
	| null
)[] => {
	const textShadowStyles = useTextShadowProps();

	return textShadowProps.map(({ id, modifyStyle }) => {
		switch (id) {
			case "blur":
				return Slider({
					id,
					value: blur,
					step: 1,
					min: 0,
					max: 300,
					modifyStyle,
				});
			case "color":
				return Input({ id, type: "color", modifyStyle });
			case "horizontal":
				return Slider({
					id,
					value: textShadowStyles.horizontal,
					step: 1,
					min: -200,
					max: 200,
					modifyStyle,
				});
			case "opacity":
				return Slider({
					id,
					value: textShadowStyles.opacity,
					step: 0.1,
					min: 0,
					max: 1,
					modifyStyle,
				});
			case "vertical":
				return Slider({
					id,
					value: textShadowStyles.vertical,
					step: 1,
					min: -200,
					max: 200,
					modifyStyle,
				});
		}
	});
};
