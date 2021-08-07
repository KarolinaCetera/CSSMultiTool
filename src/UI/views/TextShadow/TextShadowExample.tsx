import React from "react";
import { Example } from "UI";
import { useTextShadowProps } from "hooks";
import { rgbColor } from "typings";

export const TextShadowExample: React.FC = () => {
	const textShadowStyles = useTextShadowProps();
	const color = textShadowStyles.color as rgbColor;

	const textShadowStyle = {
		textShadow: `${textShadowStyles.horizontal}px ${textShadowStyles.vertical}px ${textShadowStyles.blur}px rgba(${color.r},${color.g},${color.b},${textShadowStyles.opacity})`,
	};

	return (
		<Example>
			<p style={textShadowStyle}>This text gets shadow</p>
		</Example>
	);
};
