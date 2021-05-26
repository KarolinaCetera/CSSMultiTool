import { useSelector } from "react-redux";
import { FontStyles } from "typings";

export const useFontColor = (): string =>
	useSelector((state: FontStyles) => state.fonts.fontColor.color);

export const useFontSize = (): number =>
	useSelector((state: FontStyles) => state.fonts.fontSize.fontSize);

export const useFontStyle = (): string =>
	useSelector((state: FontStyles) => state.fonts.fontStyle.fontStyle);

export const useFontWeight = (): number | string =>
	useSelector((state: FontStyles) => state.fonts.fontWeight.fontWeight);

export const useLetterSpacing = (): number =>
	useSelector((state: FontStyles) => state.fonts.letterSpacing.letterSpacing);

export const useLineHeight = (): number =>
	useSelector((state: FontStyles) => state.fonts.lineHeight.lineHeight);

export const useTextDecoration = (): string =>
	useSelector((state: FontStyles) => state.fonts.textDecoration.textDecoration);

export const useTextTransform = (): string =>
	useSelector((state: FontStyles) => state.fonts.textTransform.textTransform);

export const useWordSpacing = (): string =>
	useSelector((state: FontStyles) => state.fonts.wordSpacing.wordSpacing);
