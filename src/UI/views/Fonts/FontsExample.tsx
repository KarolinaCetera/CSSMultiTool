import React, { CSSProperties } from "react";
import { useFontProps } from "hooks";
import { Example } from "../../components";

export const FontsExample = () => {
	const fontStyles = useFontProps();

	const fontStyle = {
		color: `${fontStyles.fontColor}`,
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
