import { useBorderProps } from "hooks";
import React from "react";
import { ExampleComponent } from "UI";

export const BorderExample: React.FC = () => {
	const borderStyles = useBorderProps();

	const borderStyle = {
		border: `${borderStyles.width}px ${borderStyles.type} ${borderStyles.color}`,
	};

	return <ExampleComponent style={borderStyle} />;
};
