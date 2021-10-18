import { borderTypeOptions } from "const";
import { ReactElement } from "react";
import { FormHookProps, HookReturn } from "typings";
import { Input, Select, Slider } from "UI";

import { useBorderPropsAll, useBorderRadiusCorner } from "./useBorderProps";
import { useRadiusMode } from "./useRadiusMode";

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

const useBorderRadiusTLForm = ({
	borderRadius,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id: "Top left",
		value: borderRadius.TL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusTRForm = ({
	borderRadius,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id: "Top right",
		value: borderRadius.TR,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBRForm = ({
	borderRadius,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id: "Bottom right",
		value: borderRadius.BR,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBLForm = ({
	borderRadius,
	modifyStyle,
}): ReactElement<string, string> | null =>
	Slider({
		id: "Bottom left",
		value: borderRadius.BL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusForm = ({
	id,
	borderStyles,
	modifyStyle,
}): ReactElement<string, string> | null =>
	Slider({
		id,
		value: borderStyles.radius,
		step: 1,
		min: 0,
		max: 150,
		modifyStyle,
	});

export const useBorderForms = ({
	id,
	modifyStyle,
}: FormHookProps): Array<HookReturn> => {
	const borderStyles = useBorderPropsAll();
	const borderRadius = useBorderRadiusCorner();
	const { mode } = useRadiusMode();

	const separateRadius = [
		{
			id: "type",
			form: useBorderTypeForm({ id, type: borderTypeOptions, modifyStyle }),
		},
		{ id: "color", form: useBorderColorForm({ id, modifyStyle }) },
		{
			id: "width",
			form: useBorderWidthForm({ id, borderStyles, modifyStyle }),
		},
		{
			id: "radiusTL",
			form: useBorderRadiusTLForm({ borderRadius, modifyStyle }),
		},
		{
			id: "radiusTR",
			form: useBorderRadiusTRForm({ borderRadius, modifyStyle }),
		},
		{
			id: "radiusBR",
			form: useBorderRadiusBRForm({ borderRadius, modifyStyle }),
		},
		{
			id: "radiusBL",
			form: useBorderRadiusBLForm({ borderRadius, modifyStyle }),
		},
	];

	const allRadius = [
		{
			id: "type",
			form: useBorderTypeForm({ id, type: borderTypeOptions, modifyStyle }),
		},
		{ id: "color", form: useBorderColorForm({ id, modifyStyle }) },
		{
			id: "width",
			form: useBorderWidthForm({ id, borderStyles, modifyStyle }),
		},
		{
			id: "radius",
			form: useBorderRadiusForm({ id, borderStyles, modifyStyle }),
		},
	];

	return mode === "all" ? allRadius : separateRadius;
};
