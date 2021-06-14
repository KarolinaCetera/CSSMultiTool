import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import { hooksReturnType, rgbColor, TextShadowStyles } from "typings";

export const useTextShadowBlur = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) => state.textShadow.textShadowBlur.blur,
	);

export const useTextShadowColor = (): rgbColor =>
	useSelector((state: TextShadowStyles) =>
		hexToRgb(state.textShadow.textShadowColor.textColor),
	);

export const useTextShadowHorizontal = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) =>
			state.textShadow.textShadowHorizontal.textHorizontal,
	);

export const useTextShadowOpacity = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) => state.textShadow.textShadowOpacity.textOpacity,
	);

export const useTextShadowVertical = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) =>
			state.textShadow.textShadowVertical.textVertical,
	);
