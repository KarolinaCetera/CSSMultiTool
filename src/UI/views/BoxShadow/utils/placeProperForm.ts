import { boxShadowProps } from "const";
import { useBoxShadowProps } from "hooks";
import { Input, Slider } from "../../../containers";

export const placeProperForm = (): (
	| JSX.Element
	| false
	| undefined
	| null
)[] => {
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
				});
			case "color":
				return Input({ id, type: "color", modifyStyle });
			case "horizontal":
				return Slider({
					id,
					value: boxShadowStyles.horizontal,
					step: 1,
					min: -200,
					max: 200,
					modifyStyle,
				});
			case "opacity":
				return Slider({
					id,
					value: boxShadowStyles.opacity,
					step: 0.1,
					min: 0,
					max: 1,
					modifyStyle,
				});
			case "spread":
				return Slider({
					id,
					value: boxShadowStyles.spread,
					step: 1,
					min: -200,
					max: 200,
					modifyStyle,
				});
			case "vertical":
				return Slider({
					id,
					value: boxShadowStyles.vertical,
					step: 1,
					min: -200,
					max: 200,
					modifyStyle,
				});
		}
	});
};
