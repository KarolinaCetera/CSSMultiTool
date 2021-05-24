import React, { CSSProperties } from "react";
import {
	useFontColor,
	useFontSize,
	useFontStyle,
	useFontWeight,
	useLetterSpacing,
	useLineHeight,
	useTextTransform,
	useWordSpacing,
} from "hooks";
import { Example } from "../../components";

export const FontsExample = () => {
	const fontColor = useFontColor();
	const size = useFontSize();
	const style = useFontStyle();
	const weight = useFontWeight();
	const letterSpacing = useLetterSpacing();
	const lineHeight = useLineHeight();
	const textTransform = useTextTransform();
	const wordSpacing = useWordSpacing();

	const fontStyle = {
		color: `${fontColor}`,
		fontSize: `${size}px`,
		fontStyle: `${style}`,
		fontWeight: `${weight}`,
		letterSpacing: `${letterSpacing}px`,
		lineHeight: lineHeight,
		textTransform: `${textTransform}`,
		wordSpacing: `${wordSpacing}px`,
	} as CSSProperties;

	return (
		<Example>
			<p style={fontStyle}>Styled text</p>
		</Example>
	);
};
