import { Input, Slider } from "UI";
import { FormHookProps, HookReturn } from "typings";
import { useTextShadowProps } from "./useTextShadowProps";

const useTextShadowBlurForm = ({ id, textShadowStyles, modifyStyle }) =>
	Slider({
		id,
		value: textShadowStyles.blur,
		step: 1,
		min: 0,
		max: 300,
		modifyStyle,
	});

const useTextShadowColorForm = ({ id, modifyStyle }) =>
	Input({ id, type: "color", modifyStyle });

const useTextShadowHorizontalForm = ({ id, textShadowStyles, modifyStyle }) =>
	Slider({
		id,
		value: textShadowStyles.horizontal,
		step: 1,
		min: -200,
		max: 200,
		modifyStyle,
	});

const useTextShadowOpacityForm = ({ id, textShadowStyles, modifyStyle }) =>
	Slider({
		id,
		value: textShadowStyles.opacity,
		step: 0.1,
		min: 0,
		max: 1,
		modifyStyle,
	});

const useTextShadowVerticalForm = ({ id, textShadowStyles, modifyStyle }) =>
	Slider({
		id,
		value: textShadowStyles.vertical,
		step: 1,
		min: -200,
		max: 200,
		modifyStyle,
	});

export const useTextShadowForms = ({
	id,
	modifyStyle,
}: FormHookProps): HookReturn[] => {
	const textShadowStyles = useTextShadowProps();

	return [
		{
			id: "blur",
			form: useTextShadowBlurForm({ id, textShadowStyles, modifyStyle }),
		},
		{
			id: "color",
			form: useTextShadowColorForm({ id, modifyStyle }),
		},
		{
			id: "horizontal",
			form: useTextShadowHorizontalForm({ id, textShadowStyles, modifyStyle }),
		},
		{
			id: "opacity",
			form: useTextShadowOpacityForm({ id, textShadowStyles, modifyStyle }),
		},
		{
			id: "vertical",
			form: useTextShadowVerticalForm({ id, textShadowStyles, modifyStyle }),
		},
	];
};
