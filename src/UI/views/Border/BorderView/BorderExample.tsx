import {
	useBorderPropsAll,
	useRadiusMode,
	userBorderRadiusCorner,
} from "hooks";
import React from "react";
import { Example } from "UI";

import { setBorderStyle } from "../utils";

export const BorderExample: React.FC = () => {
	const borderStyle = useBorderPropsAll();
	const borderRadius = userBorderRadiusCorner();

	const { mode } = useRadiusMode();

	return <Example style={setBorderStyle(mode, borderStyle, borderRadius)} />;
};
