import React from "react";
import { Example } from "UI";
import {
	useTextShadowBlur,
	useTextShadowColor,
	useTextShadowHorizontal,
	useTextShadowOpacity,
	useTextShadowVertical,
} from "hooks";

export const TextShadowExample = () => {
	const blur = useTextShadowBlur();
	const color = useTextShadowColor();
	const horizontal = useTextShadowHorizontal();
	const opacity = useTextShadowOpacity();
	const vertical = useTextShadowVertical();

	const textShadowStyle = {
		textShadow: `${horizontal}px ${vertical}px ${blur}px rgba(${color.r},${color.g},${color.b},${opacity})`,
	};

	return (
		<Example>
			<p style={textShadowStyle}>This text gets shadow</p>
		</Example>
	);
};
