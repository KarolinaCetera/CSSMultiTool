import { Input, Select, Slider } from "UI";
import { borderTypeOptions } from "const";
import { useBorderPropsAll, userBorderRadiusCorner } from "./useBorderProps";
import { FormHook, FormHookProps } from "../typings";

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
		id: "Top left",
		value: borderRadius.TL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBRForm = ({ borderRadius, modifyStyle }: FormHookProps) =>
	Slider({
		id: "Top left",
		value: borderRadius.TL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBLForm = ({ borderRadius, modifyStyle }) =>
	Slider({
		id: "Top left",
		value: borderRadius.TL,
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
}: FormHookProps): FormHook => {
	const borderStyles = useBorderPropsAll();
	const borderRadius = userBorderRadiusCorner();

	return {
		typeForm: useBorderTypeForm({ id, type: borderTypeOptions, modifyStyle }),
		colorForm: useBorderColorForm({ id, modifyStyle }),
		widthForm: useBorderWidthForm({ id, borderStyles, modifyStyle }),
		radiusTLForm: useBorderRadiusTLForm({ borderRadius, modifyStyle }),
		radiusTRForm: useBorderRadiusTRForm({ borderRadius, modifyStyle }),
		radiusBRForm: useBorderRadiusBRForm({ borderRadius, modifyStyle }),
		radiusBLForm: useBorderRadiusBLForm({ borderRadius, modifyStyle }),
		radiusForm: useBorderRadiusForm({ id, borderStyles, modifyStyle }),
	};
};
