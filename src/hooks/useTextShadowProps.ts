import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import { rgbColor, TextShadowStyles } from "typings";

export const useTextShadowBlur = (): number =>
	useSelector((state: TextShadowStyles) => state.textShadowBlur.blur);

export const useTextShadowColor = (): rgbColor =>
	useSelector((state: TextShadowStyles) =>
		hexToRgb(state.textShadowColor.textColor),
	);

export const useTextShadowHorizontal = (): number =>
	useSelector(
		(state: TextShadowStyles) => state.textShadowHorizontal.textHorizontal,
	);

export const useTextShadowOpacity = (): number =>
	useSelector((state: TextShadowStyles) => state.textShadowOpacity.textOpacity);

export const useTextShadowVertical = (): number =>
	useSelector(
		(state: TextShadowStyles) => state.textShadowVertical.textVertical,
	);
