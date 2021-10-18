import { ReactElement } from "react";
import { FormHookProps, HookReturn } from "typings";
import { Slider } from "UI";

import { useBorderRadius } from "./useBorderRadiusProps";

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

export const useBorderRadiusForms = ({
	modifyStyle,
}: FormHookProps): Array<HookReturn> => {
	const borderRadius = useBorderRadius();

	return [
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
};
