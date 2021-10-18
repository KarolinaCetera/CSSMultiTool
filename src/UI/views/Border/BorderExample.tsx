import { useBorderProps } from "hooks";
import React from "react";
import { Example, StyleText } from "UI/index";

export const BorderExample: React.FC = () => {
	const borderStyles = useBorderProps();

	const borderStyle = {
		border: `${borderStyles.width}px ${borderStyles.type} ${borderStyles.color}`,
	};

	return (
		<>
			<Example style={borderStyle} />
			<StyleText styleText={borderStyle} />
		</>
	);
};
