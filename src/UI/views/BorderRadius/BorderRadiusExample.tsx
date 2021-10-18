import { useBorderRadius } from "hooks";
import React from "react";
import { Example, StyleText } from "UI";

export const BorderRadiusExample: React.FC = () => {
	const borderRadiusStyles = useBorderRadius();

	const borderRadiusStyle = {
		borderTopLeftRadius: `${borderRadiusStyles.TL}px`,
		borderTopRightRadius: `${borderRadiusStyles.TR}px`,
		borderBottomRightRadius: `${borderRadiusStyles.BR}px`,
		borderBottomLeftRadius: `${borderRadiusStyles.BL}px`,
	};

	return (
		<>
			<Example style={borderRadiusStyle} />
			<StyleText styleText={borderRadiusStyle} />
		</>
	);
};
