import { Input, Slider } from "UI";
import { useBoxShadowProps } from "./useBoxShadowProps";

const useBoxShadowBlurForm = ({ id, blur, modifyStyle }) =>
	Slider({
		id,
		value: blur,
		step: 1,
		min: 0,
		max: 300,
		modifyStyle,
	});

const useBoxShadowColorForm = ({ id, modifyStyle }) =>
	Input({ id, type: "color", modifyStyle });

const useBoxShadowHorizontal = ({ id, horizontal, modifyStyle }) =>
	Slider({
		id,
		value: horizontal,
		step: 1,
		min: -200,
		max: 200,
		modifyStyle,
	});

const useBoxShadowOpacity = ({ id, opacity, modifyStyle }) =>
	Slider({
		id,
		value: opacity,
		step: 0.1,
		min: 0,
		max: 1,
		modifyStyle,
	});

const useBoxShadowSpread = ({ id, spread, modifyStyle }) =>
	Slider({
		id,
		value: spread,
		step: 1,
		min: -200,
		max: 200,
		modifyStyle,
	});

const useBoxShadowVertical = ({ id, vertical, modifyStyle }) =>
	Slider({
		id,
		value: vertical,
		step: 1,
		min: -200,
		max: 200,
		modifyStyle,
	});

export const useBoxShadowForms = ({ id, modifyStyle }) => {
	const { blur, horizontal, opacity, spread, vertical } = useBoxShadowProps();

	return {
		blurForm: useBoxShadowBlurForm({ id, blur, modifyStyle }),
		colorForm: useBoxShadowColorForm({ id, modifyStyle }),
		horizontalForm: useBoxShadowHorizontal({ id, horizontal, modifyStyle }),
		opacityForm: useBoxShadowOpacity({ id, opacity, modifyStyle }),
		spreadForm: useBoxShadowSpread({ id, spread, modifyStyle }),
		verticalForm: useBoxShadowVertical({ id, vertical, modifyStyle }),
	};
};
