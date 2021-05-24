import { useSelector } from "react-redux";
import { FontStyles } from "typings";

export const useFontColor = (): string =>
	useSelector((state: FontStyles) => state.fontColor.color);

export const useFontSize = (): number =>
	useSelector((state: FontStyles) => state.fontSize.fontSize);

export const useFontStyle = (): string =>
	useSelector((state: FontStyles) => state.fontStyle.fontStyle);

export const useFontWeight = (): number | string =>
	useSelector((state: FontStyles) => state.fontWeight.fontWeight);

export const useLetterSpacing = (): number =>
	useSelector((state: FontStyles) => state.letterSpacing.letterSpacing);

export const useLineHeight = (): number =>
	useSelector((state: FontStyles) => state.lineHeight.lineHeight);

export const useTextDecoration = (): string =>
	useSelector((state: FontStyles) => state.textDecoration.textDecoration);

export const useTextTransform = () =>
	useSelector((state: FontStyles) => state.textTransform.textTransform);

export const useWordSpacing = () =>
	useSelector((state: FontStyles) => state.wordSpacing.wordSpacing);
