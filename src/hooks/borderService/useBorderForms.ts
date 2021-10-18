import { borderTypeOptions } from "const";
import { ReactElement } from "react";
import { FormHookProps, HookReturn } from "typings";
import { Input, Select, Slider } from "UI";

import { useBorderProps } from "./useBorderProps";

const useBorderTypeForm = ({
	id,
	type,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Select({
		id,
		type,
		modifyStyle,
	});

const useBorderColorForm = ({
	id,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Input({ id, type: "color", modifyStyle });

const useBorderWidthForm = ({
	id,
	borderStyles,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id,
		value: borderStyles.width,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

export const useBorderForms = ({
	id,
	modifyStyle,
}: FormHookProps): Array<HookReturn> => {
	const borderStyles = useBorderProps();

	return [
		{
			id: "type",
			form: useBorderTypeForm({ id, type: borderTypeOptions, modifyStyle }),
		},
		{ id: "color", form: useBorderColorForm({ id, modifyStyle }) },
		{
			id: "width",
			form: useBorderWidthForm({ id, borderStyles, modifyStyle }),
		},
	];
};
