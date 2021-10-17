import { Input, Select, Slider } from "UI";
import { borderTypeOptions } from "const";
import { useBorderPropsAll, userBorderRadiusCorner } from "./useBorderProps";
import { FormHookProps, HookReturn } from "typings";
import { useRadiusMode } from "./useRadiusMode";

const useBorderTypeForm = ({ id, type, modifyStyle }) =>
	Select({
		id,
		type,
		modifyStyle,
	});

const useBorderColorForm = ({ id, modifyStyle }) =>
	Input({ id, type: "color", modifyStyle });

const useBorderWidthForm = ({ id, borderStyles, modifyStyle }) =>
	Slider({
		id,
		value: borderStyles.width,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusTLForm = ({ borderRadius, modifyStyle }: FormHookProps) =>
	Slider({
		id: "Top left",
		value: borderRadius.TL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusTRForm = ({ borderRadius, modifyStyle }: FormHookProps) =>
	Slider({
		id: "Top right",
		value: borderRadius.TR,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBRForm = ({ borderRadius, modifyStyle }: FormHookProps) =>
	Slider({
		id: "Bottom right",
		value: borderRadius.BR,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBLForm = ({ borderRadius, modifyStyle }) =>
	Slider({
		id: "Bottom left",
		value: borderRadius.BL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusForm = ({ id, borderStyles, modifyStyle }) =>
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
}: FormHookProps): HookReturn[] => {
	const borderStyles = useBorderPropsAll();
	const borderRadius = userBorderRadiusCorner();
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