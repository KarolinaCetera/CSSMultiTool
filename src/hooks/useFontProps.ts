import { useSelector } from "react-redux";
import { ControlProps, FontStyles, hooksReturnType } from "typings";

const useFontColor = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.fontColor.color);

const useFontSize = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.fontSize.fontSize);

const useFontStyle = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.fontStyle.fontStyle);

const useFontWeight = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.fontWeight.fontWeight);

const useLetterSpacing = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.letterSpacing.letterSpacing);

const useLineHeight = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.lineHeight.lineHeight);

const useTextTransform = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.textTransform.textTransform);

const useWordSpacing = (): hooksReturnType =>
	useSelector((state: FontStyles) => state.fonts.wordSpacing.wordSpacing);

export const useFontProps = (): ControlProps => ({
	color: useFontColor(),
	fontSize: useFontSize(),
	style: useFontStyle(),
	weight: useFontWeight(),
	letterSpacing: useLetterSpacing(),
	lineHeight: useLineHeight(),
	textTransform: useTextTransform(),
	wordSpacing: useWordSpacing(),
});
