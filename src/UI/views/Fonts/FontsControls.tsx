import React from "react";
import { useDispatch } from "react-redux";
import {
	useFontColor,
	useFontSize,
	useFontStyle,
	useFontWeight,
	useLetterSpacing,
	useLineHeight,
	useTextDecoration,
	useTextTransform,
	useWordSpacing,
} from "../../../hooks/useFontProps";

// color, size, style, weight, text-transform, text-decoration, line-height, letter-spacing, word-spacing

export const FontsControls = () => {
	const dispatch = useDispatch();

	const fontColor = useFontColor();
	const fontSize = useFontSize();
	const fontStyle = useFontStyle();
	const fontWeight = useFontWeight();
	const letterSpacing = useLetterSpacing();
	const lineHeight = useLineHeight();
	const textDecoration = useTextDecoration();
	const textTransform = useTextTransform();
	const wordSpacing = useWordSpacing();

	return <p>Controls</p>;
};
