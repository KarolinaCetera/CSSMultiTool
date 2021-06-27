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
	useRadiusMode,
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

	const { mode } = useRadiusMode();

	const borderStyle = {
		border: `${width}px ${type} ${color}`,
		borderRadius: `${radius}px`,
	};

	const borderExtendedStyle = {
		border: `${width}px ${type} ${color}`,
		borderTopLeftRadius: `${radiusTL}px`,
		borderTopRightRadius: `${radiusTR}px`,
		borderBottomRightRadius: `${radiusBR}px`,
		borderBottomLeftRadius: `${radiusBL}px`,
	};

	return <Example style={mode === "all" ? borderStyle : borderExtendedStyle} />;
};
