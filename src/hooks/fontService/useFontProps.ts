import { DefaultRootState, useSelector } from "react-redux";
import { ControlProps, hooksReturnType } from "typings";

interface FontStyles extends DefaultRootState {
	fonts: {
		fontColor: { color: string };
		fontSize: { fontSize: number };
		fontStyle: { fontStyle: string };
		fontWeight: { fontWeight: string | number };
		letterSpacing: { letterSpacing: number };
		lineHeight: { lineHeight: number };
		textDecoration: { textDecoration: string };
		textTransform: { textTransform: string };
		wordSpacing: { wordSpacing: string };
	};
}

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
