import {
	fontStyleOptions,
	fontWeightOptions,
	textTransformOptions as transformType,
} from "const";
import { ReactElement } from "react";
import { Input, Select, Slider } from "UI";

import { FormHookProps, HookReturn } from "../../typings";
import { useFontProps } from "./useFontProps";

const useFontColorForm = ({ id, modifyStyle }) =>
	Input({ id, type: "color", modifyStyle });

const useFontSizeForm = ({
	id,
	fontSize,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id,
		value: fontSize,
		step: 1,
		min: 0,
		max: 300,
		modifyStyle,
	});

const useFontWeightForm = ({
	id,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Select({
		id,
		type: fontWeightOptions,
		modifyStyle,
	});

const useFontStyleForm = ({
	id,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Select({
		id,
		type: fontStyleOptions,
		modifyStyle,
	});

const useLetterSpacingForm = ({
	id,
	letterSpacing,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id,
		value: letterSpacing,
		step: 1,
		min: 0,
		max: 300,
		modifyStyle,
	});

const useLineHeightForm = ({
	id,
	lineHeight,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id,
		value: lineHeight,
		step: 0.1,
		min: 0,
		max: 50,
		modifyStyle,
	});

const useTextTransformForm = ({
	id,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Select({
		id,
		type: transformType,
		modifyStyle,
	});

const useWordSpacingForm = ({
	id,
	wordSpacing,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id,
		value: wordSpacing,
		step: 1,
		min: 0,
		max: 300,
		modifyStyle,
	});

export const useFontForms = ({
	id,
	modifyStyle,
}: FormHookProps): Array<HookReturn> => {
	const { fontSize, letterSpacing, lineHeight, wordSpacing } = useFontProps();

	return [
		{ id: "color", form: useFontColorForm({ id, modifyStyle }) },
		{ id: "fontSize", form: useFontSizeForm({ id, fontSize, modifyStyle }) },
		{ id: "fontStyle", form: useFontStyleForm({ id, modifyStyle }) },
		{ id: "fontWeight", form: useFontWeightForm({ id, modifyStyle }) },
		{
			id: "letterSpacing",
			form: useLetterSpacingForm({ id, letterSpacing, modifyStyle }),
		},
		{
			id: "lineHeight",
			form: useLineHeightForm({ id, lineHeight, modifyStyle }),
		},
		{ id: "textTransform", form: useTextTransformForm({ id, modifyStyle }) },
		{
			id: "wordSpacing",
			form: useWordSpacingForm({ id, wordSpacing, modifyStyle }),
		},
	];
};
