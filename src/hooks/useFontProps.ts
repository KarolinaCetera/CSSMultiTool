import { useSelector } from "react-redux";
import { FontStyles } from "typings";

export const useFontColor = () =>
	useSelector((state: FontStyles) => state.fontColor.color);

export const useFontSize = () =>
	useSelector((state: FontStyles) => state.fontSize.fontSize);

export const useFontStyle = () =>
	useSelector((state: FontStyles) => state.fontStyle.fontStyle);

export const useFontWeight = () =>
	useSelector((state: FontStyles) => state.fontWeight.fontWeight);

export const useLetterSpacing = () =>
	useSelector((state: FontStyles) => state.letterSpacing.letterSpacing);

export const useLineHeight = () =>
	useSelector((state: FontStyles) => state.lineHeight.lineHeight);

export const useTextDecoration = () =>
	useSelector((state: FontStyles) => state.textDecoration.textDecoration);

export const useTextTransform = () =>
	useSelector((state: FontStyles) => state.textTransform.textTransform);

export const useWordSpacing = () =>
	useSelector((state: FontStyles) => state.wordSpacing.wordSpacing);
