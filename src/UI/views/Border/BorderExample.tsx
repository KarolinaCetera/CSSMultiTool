import React from "react";
import { Example } from "UI";
import {
	useBorderType,
	useBorderRadius,
	useBorderColor,
	useBorderWidth,
} from "hooks";

export const BorderExample: React.FC = () => {
	const width = useBorderWidth();
	const color = useBorderColor();
	const radius = useBorderRadius();
	const type = useBorderType();

	const borderStyle = {
		border: `${width}px ${type} ${color}`,
		borderRadius: `${radius}px`,
	};

	return <Example style={borderStyle} />;
};
