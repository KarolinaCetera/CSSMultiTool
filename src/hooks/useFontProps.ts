import { useSelector } from "react-redux";
import { FontStyles, hooksReturnType } from "typings";

export const useFontColor = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.fontColor.color);

export const useFontSize = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.fontSize.fontSize);

export const useFontStyle = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.fontStyle.fontStyle);

export const useFontWeight = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.fontWeight.fontWeight);

export const useLetterSpacing = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.letterSpacing.letterSpacing);

export const useLineHeight = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.lineHeight.lineHeight);

export const useTextDecoration = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.textDecoration.textDecoration);

export const useTextTransform = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.textTransform.textTransform);

export const useWordSpacing = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.wordSpacing.wordSpacing);
