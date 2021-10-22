import { ReactElement } from "react";
import { FormHookProps, HookReturn } from "typings";
import { Slider } from "UI";

import { useBorderRadius } from "./useBorderRadiusProps";

const useBorderRadiusTLForm = ({
	id,
	borderRadius,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id,
		value: borderRadius.TL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusTRForm = ({
	id,
	borderRadius,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id,
		value: borderRadius.TR,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBRForm = ({
	id,
	borderRadius,
	modifyStyle,
}: FormHookProps): ReactElement<string, string> | null =>
	Slider({
		id,
		value: borderRadius.BR,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBLForm = ({
	id,
	borderRadius,
	modifyStyle,
}): ReactElement<string, string> | null =>
	Slider({
		id,
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
			form: useBorderRadiusTLForm({
				id: "Top left",
				borderRadius,
				modifyStyle,
			}),
		},
		{
			id: "radiusTR",
			form: useBorderRadiusTRForm({
				id: "Top right",
				borderRadius,
				modifyStyle,
			}),
		},
		{
			id: "radiusBR",
			form: useBorderRadiusBRForm({
				id: "Bottom right",
				borderRadius,
				modifyStyle,
			}),
		},
		{
			id: "radiusBL",
			form: useBorderRadiusBLForm({
				id: "Bottom left",
				borderRadius,
				modifyStyle,
			}),
		},
	];
};
