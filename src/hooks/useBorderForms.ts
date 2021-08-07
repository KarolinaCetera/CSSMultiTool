import { Input, Select, Slider } from "../UI";
import { borderTypeOptions as type } from "../const";
import { useBorderPropsAll, userBorderRadiusCorner } from "./useBorderProps";

const useBorderTypeForm = ({ id, modifyStyle }) =>
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

const useBorderRadiusTLForm = ({ borderRadius, modifyStyle }) =>
	Slider({
		id: "Top left",
		value: borderRadius.TL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusTRForm = ({ borderRadius, modifyStyle }) =>
	Slider({
		id: "Top left",
		value: borderRadius.TL,
		step: 1,
		min: 0,
		max: 100,
		modifyStyle,
	});

const useBorderRadiusBRForm = ({ borderRadius, modifyStyle }) =>
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

export const useBorderForms = ({ id, modifyStyle }) => {
	const borderStyles = useBorderPropsAll();
	const borderRadius = userBorderRadiusCorner();

	return {
		borderTypeForm: useBorderTypeForm({ id, modifyStyle }),
		borderColorForm: useBorderColorForm({ id, modifyStyle }),
		borderWidthForm: useBorderWidthForm({ id, borderStyles, modifyStyle }),
		borderRadiusTLForm: useBorderRadiusTLForm({ borderRadius, modifyStyle }),
		borderRadiusTRForm: useBorderRadiusTRForm({ borderRadius, modifyStyle }),
		borderRadiusBRForm: useBorderRadiusBRForm({ borderRadius, modifyStyle }),
		borderRadiusBLForm: useBorderRadiusBLForm({ borderRadius, modifyStyle }),
		borderRadiusForm: useBorderRadiusForm({ id, borderStyles, modifyStyle }),
	};
};
