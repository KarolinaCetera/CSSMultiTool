import { useFontProps } from "hooks";
import React, { CSSProperties } from "react";
import { Example } from "UI";

export const FontsExample: React.FC = () => {
	const fontStyles = useFontProps();

	const fontStyle = {
		color: `${fontStyles.color}`,
		fontSize: `${fontStyles.fontSize}px`,
		fontStyle: `${fontStyles.style}`,
		fontWeight: `${fontStyles.weight}`,
		letterSpacing: `${fontStyles.letterSpacing}px`,
		lineHeight: fontStyles.lineHeight,
		textTransform: `${fontStyles.textTransform}`,
		wordSpacing: `${fontStyles.wordSpacing}px`,
	} as CSSProperties;

	return (
		<Example>
			<p style={fontStyle}>Styled text</p>
		</Example>
	);
};
