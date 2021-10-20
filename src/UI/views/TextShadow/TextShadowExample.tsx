import { useTextShadowProps } from "hooks";
import React from "react";
import { rgbColor } from "typings";
import { Example, StyleText } from "UI";

export const TextShadowExample: React.FC = () => {
	const textShadowStyles = useTextShadowProps();
	const color = textShadowStyles.color as rgbColor;

	const textShadowStyle = {
		color: "black",
		textShadow: `${textShadowStyles.horizontal}px ${textShadowStyles.vertical}px ${textShadowStyles.blur}px rgba(${color.r},${color.g},${color.b},${textShadowStyles.opacity})`,
	};

	return (
		<>
			<Example style={textShadowStyle}>
				<p style={textShadowStyle}>This text gets shadow</p>
			</Example>
			<StyleText styleText={textShadowStyle} />
		</>
	);
};
