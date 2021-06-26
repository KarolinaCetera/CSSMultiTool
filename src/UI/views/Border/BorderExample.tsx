import React from "react";
import { Example } from "UI";
import {
	useBorderType,
	useBorderRadius,
	useBorderColor,
	useBorderWidth,
	useBorderRadiusTL,
	useBorderRadiusBL,
	useBorderRadiusBR,
	useBorderRadiusTR,
} from "hooks";

export const BorderExample: React.FC = () => {
	const width = useBorderWidth();
	const color = useBorderColor();
	const radius = useBorderRadius();
	const radiusTL = useBorderRadiusTL();
	const radiusTR = useBorderRadiusTR();
	const radiusBR = useBorderRadiusBR();
	const radiusBL = useBorderRadiusBL();
	const type = useBorderType();

	/** TODO add checkbox: user has to choose if he wants to use one slider or four  */

	const borderStyle = {
		border: `${width}px ${type} ${color}`,
		borderRadius: `${radius}px`,
		borderTopLeftRadius: `${radiusTL}px`,
		borderTopRightRadius: `${radiusTR}px`,
		borderBottomRightRadius: `${radiusBR}px`,
		borderBottomLeftRadius: `${radiusBL}px`,
	};

	return <Example style={borderStyle} />;
};
