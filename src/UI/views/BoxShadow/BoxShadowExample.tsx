import React from "react";
import { Example } from "UI";
import {
	useBoxShadowBlur,
	useBoxShadowSpread,
	useBoxShadowVertical,
	useBoxShadowColor,
	useBoxShadowHorizontal,
	useBoxShadowOpacity,
} from "hooks";

export const BoxShadowExample: React.FC = () => {
	const blur = useBoxShadowBlur();
	const color = useBoxShadowColor();
	const horizontal = useBoxShadowHorizontal();
	const opacity = useBoxShadowOpacity();
	const spread = useBoxShadowSpread();
	const vertical = useBoxShadowVertical();

	const boxShadowStyle = {
		boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${color.r},${color.g},${color.b},${opacity})`,
	};

	return <Example style={boxShadowStyle} />;
};
