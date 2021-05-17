import React from "react";
import { Example } from "../../components";
import {
	useBorderType,
	useBorderRadius,
	useBorderColor,
	useBorderWidth,
} from "../../../hooks";

export const BorderExample = () => {
	const width = useBorderWidth();
	const color = useBorderColor();
	const radius = useBorderRadius();
	const type = useBorderType();

	const borderStyle = {
		border: `${width}px ${type} ${color}`,
		borderRadius: radius,
	};

	return <Example style={borderStyle} />;
};
