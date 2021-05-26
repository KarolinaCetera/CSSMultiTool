import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import { BoxShadowStyles, rgbColor } from "typings";

export const useBoxShadowBlur = (): number =>
	useSelector((state: BoxShadowStyles) => state.boxShadow.boxShadowBlur.blur);

export const useBoxShadowColor = (): rgbColor =>
	useSelector((state: BoxShadowStyles) =>
		hexToRgb(state.boxShadow.boxShadowColor.shadowColor),
	);

export const useBoxShadowHorizontal = (): number =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowHorizontal.horizontal,
	);

export const useBoxShadowOpacity = (): number =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowOpacity.opacity,
	);

export const useBoxShadowSpread = (): number =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowSpread.spread,
	);

export const useBoxShadowVertical = (): number =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowVertical.vertical,
	);
