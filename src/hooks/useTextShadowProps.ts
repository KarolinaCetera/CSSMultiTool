import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import { rgbColor, TextShadowStyles } from "typings";

export const useTextShadowBlur = (): number =>
	useSelector(
		(state: TextShadowStyles) => state.textShadow.textShadowBlur.blur,
	);

export const useTextShadowColor = (): rgbColor =>
	useSelector((state: TextShadowStyles) =>
		hexToRgb(state.textShadow.textShadowColor.textColor),
	);

export const useTextShadowHorizontal = (): number =>
	useSelector(
		(state: TextShadowStyles) =>
			state.textShadow.textShadowHorizontal.textHorizontal,
	);

export const useTextShadowOpacity = (): number =>
	useSelector(
		(state: TextShadowStyles) => state.textShadow.textShadowOpacity.textOpacity,
	);

export const useTextShadowVertical = (): number =>
	useSelector(
		(state: TextShadowStyles) =>
			state.textShadow.textShadowVertical.textVertical,
	);
