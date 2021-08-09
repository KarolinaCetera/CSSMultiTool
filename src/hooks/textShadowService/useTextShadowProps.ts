import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import {
	ControlProps,
	hooksReturnType,
	rgbColor,
	TextShadowStyles,
} from "typings";

const useTextShadowBlur = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) => state.textShadow.textShadowBlur.blur,
	);

const useTextShadowColor = (): rgbColor =>
	useSelector((state: TextShadowStyles) =>
		hexToRgb(state.textShadow.textShadowColor.textColor),
	);

const useTextShadowHorizontal = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) =>
			state.textShadow.textShadowHorizontal.textHorizontal,
	);

const useTextShadowOpacity = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) => state.textShadow.textShadowOpacity.textOpacity,
	);

const useTextShadowVertical = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) =>
			state.textShadow.textShadowVertical.textVertical,
	);

export const useTextShadowProps = (): ControlProps => ({
	blur: useTextShadowBlur(),
	color: useTextShadowColor(),
	horizontal: useTextShadowHorizontal(),
	opacity: useTextShadowOpacity(),
	vertical: useTextShadowVertical(),
});
