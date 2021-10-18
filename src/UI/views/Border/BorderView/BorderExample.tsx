import { useBorderPropsAll, useBorderRadiusCorner, useRadiusMode } from "hooks";
import React from "react";
import { Example } from "UI";

import { setBorderStyle } from "../utils";

export const BorderExample: React.FC = () => {
	const borderStyle = useBorderPropsAll();
	const borderRadius = useBorderRadiusCorner();

	const { mode } = useRadiusMode();

	return <Example style={setBorderStyle(mode, borderStyle, borderRadius)} />;
};
