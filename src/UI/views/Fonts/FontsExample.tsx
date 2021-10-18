import { useFontProps } from "hooks";
import React, { CSSProperties } from "react";
import { Example, StyleText } from "UI";

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
		<>
			<Example style={fontStyle}>
				<p style={fontStyle}>Styled text</p>
			</Example>
			<StyleText styleText={fontStyle as { [key: string]: string }} />
		</>
	);
};
