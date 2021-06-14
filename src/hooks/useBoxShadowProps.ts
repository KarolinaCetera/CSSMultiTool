import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import { BoxShadowStyles, hooksReturnType, rgbColor } from "typings";

export const useBoxShadowBlur = (): hooksReturnType =>
	useSelector((state: BoxShadowStyles) => state.boxShadow.boxShadowBlur.blur);

export const useBoxShadowColor = (): rgbColor =>
	useSelector((state: BoxShadowStyles) =>
		hexToRgb(state.boxShadow.boxShadowColor.shadowColor),
	);

export const useBoxShadowHorizontal = (): hooksReturnType =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowHorizontal.horizontal,
	);

export const useBoxShadowOpacity = (): hooksReturnType =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowOpacity.opacity,
	);

export const useBoxShadowSpread = (): hooksReturnType =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowSpread.spread,
	);

export const useBoxShadowVertical = (): hooksReturnType =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowVertical.vertical,
	);
