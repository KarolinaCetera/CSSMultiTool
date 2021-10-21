import { useTextShadowProps } from "hooks";
import React from "react";
import { rgbColor } from "typings";
import { ExampleComponent } from "UI";

export const TextShadowExample: React.FC = () => {
	const textShadowStyles = useTextShadowProps();
	const color = textShadowStyles.color as rgbColor;

	const textShadowStyle = {
		color: "black",
		textShadow: `${textShadowStyles.horizontal}px ${textShadowStyles.vertical}px ${textShadowStyles.blur}px rgba(${color.r},${color.g},${color.b},${textShadowStyles.opacity})`,
	};

	return (
		<ExampleComponent
			style={textShadowStyle}
			exampleChildren={<p style={textShadowStyle}>Styled text</p>}
		/>
	);
};
