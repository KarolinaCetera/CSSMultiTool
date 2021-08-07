import { useFontProps } from "./useFontProps";
import {
	fontStyleOptions,
	fontWeightOptions,
	textTransformOptions as transformType,
} from "const";
import { Input, Select, Slider } from "UI";

const useFontColorForm = ({ id, modifyStyle }) =>
	Input({ id, type: "color", modifyStyle });

const useFontSizeForm = ({ id, fontSize, modifyStyle }) =>
	Slider({
		id,
		value: fontSize,
		step: 1,
		min: 0,
		max: 300,
		modifyStyle,
	});

const useFontWeightForm = ({ id, modifyStyle }) =>
	Select({
		id,
		type: fontWeightOptions,
		modifyStyle,
	});

const useFontStyleForm = ({ id, modifyStyle }) =>
	Select({
		id,
		type: fontStyleOptions,
		modifyStyle,
	});

const useLetterSpacingForm = ({ id, letterSpacing, modifyStyle }) =>
	Slider({
		id,
		value: letterSpacing,
		step: 1,
		min: 0,
		max: 300,
		modifyStyle,
	});

const useLineHeightForm = ({ id, lineHeight, modifyStyle }) =>
	Slider({
		id,
		value: lineHeight,
		step: 0.1,
		min: 0,
		max: 50,
		modifyStyle,
	});

const useTextTransformForm = ({ id, modifyStyle }) =>
	Select({
		id,
		type: transformType,
		modifyStyle,
	});

const useWordSpacingForm = ({ id, wordSpacing, modifyStyle }) =>
	Slider({
		id,
		value: wordSpacing,
		step: 1,
		min: 0,
		max: 300,
		modifyStyle,
	});

export const useFontsForms = ({ id, modifyStyle }) => {
	const { fontSize, letterSpacing, lineHeight, wordSpacing } = useFontProps();

	return {
		colorForm: useFontColorForm({ id, modifyStyle }),
		fontSizeForm: useFontSizeForm({ id, fontSize, modifyStyle }),
		fontStyleForm: useFontStyleForm({ id, modifyStyle }),
		fontWeightForm: useFontWeightForm({ id, modifyStyle }),
		letterSpacingForm: useLetterSpacingForm({ id, letterSpacing, modifyStyle }),
		lineHeightForm: useLineHeightForm({ id, lineHeight, modifyStyle }),
		textTransformForm: useTextTransformForm({ id, modifyStyle }),
		wordSpacingForm: useWordSpacingForm({ id, wordSpacing, modifyStyle }),
	};
};
