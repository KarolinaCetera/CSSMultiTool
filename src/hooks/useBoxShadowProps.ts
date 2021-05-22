import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import { BoxShadowStyles, rgbColor } from "typings";

export const useBoxShadowBlur = (): number =>
	useSelector((state: BoxShadowStyles) => state.boxShadowBlur.blur);

export const useBoxShadowColor = (): rgbColor =>
	useSelector((state: BoxShadowStyles) =>
		hexToRgb(state.boxShadowColor.shadowColor),
	);

export const useBoxShadowHorizontal = (): number =>
	useSelector((state: BoxShadowStyles) => state.boxShadowHorizontal.horizontal);

export const useBoxShadowOpacity = (): number =>
	useSelector((state: BoxShadowStyles) => state.boxShadowOpacity.opacity);

export const useBoxShadowSpread = (): number =>
	useSelector((state: BoxShadowStyles) => state.boxShadowSpread.spread);

export const useBoxShadowVertical = (): number =>
	useSelector((state: BoxShadowStyles) => state.boxShadowVertical.vertical);
