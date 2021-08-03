import React from "react";
import { Example } from "UI";
import {
	useRadiusMode,
	useBorderPropsAll,
	userBorderRadiusCorner,
} from "hooks";

export const BorderExample: React.FC = () => {
	const borderStyles = useBorderPropsAll();
	const borderRadius = userBorderRadiusCorner();

	const { mode } = useRadiusMode();

	const borderStyle = {
		border: `${borderStyles.width}px ${borderStyles.type} ${borderStyles.color}`,
		borderRadius: `${borderStyles.radius}px`,
	};

	const borderExtendedStyle = {
		border: `${borderStyles.width}px ${borderStyles.type} ${borderStyles.color}`,
		borderTopLeftRadius: `${borderRadius.TL}px`,
		borderTopRightRadius: `${borderRadius.TR}px`,
		borderBottomRightRadius: `${borderRadius.BR}px`,
		borderBottomLeftRadius: `${borderRadius.BL}px`,
	};

	return <Example style={mode === "all" ? borderStyle : borderExtendedStyle} />;
};
