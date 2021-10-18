import { useBoxShadowProps } from "hooks";
import React from "react";
import { rgbColor } from "typings";
import { Example, StyleText } from "UI";

export const BoxShadowExample: React.FC = () => {
	const boxShadowStyles = useBoxShadowProps();
	const color = boxShadowStyles.color as rgbColor;

	const boxShadowStyle = {
		boxShadow: `${boxShadowStyles.horizontal}px ${boxShadowStyles.vertical}px ${boxShadowStyles.blur}px ${boxShadowStyles.spread}px rgba(${color.r},${color.g},${color.b},${boxShadowStyles.opacity})`,
	};

	return (
		<>
			<Example style={boxShadowStyle} />
			<StyleText styleText={boxShadowStyle} />
		</>
	);
};
