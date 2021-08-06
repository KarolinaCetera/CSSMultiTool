import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import {
	BoxShadowStyles,
	ControlProps,
	hooksReturnType,
	rgbColor,
} from "typings";

const useBoxShadowBlur = (): hooksReturnType =>
	useSelector((state: BoxShadowStyles) => state.boxShadow.boxShadowBlur.blur);

const useBoxShadowColor = (): rgbColor =>
	useSelector((state: BoxShadowStyles) =>
		hexToRgb(state.boxShadow.boxShadowColor.shadowColor),
	);

const useBoxShadowHorizontal = (): hooksReturnType =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowHorizontal.horizontal,
	);

const useBoxShadowOpacity = (): hooksReturnType =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowOpacity.opacity,
	);

const useBoxShadowSpread = (): hooksReturnType =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowSpread.spread,
	);

const useBoxShadowVertical = (): hooksReturnType =>
	useSelector(
		(state: BoxShadowStyles) => state.boxShadow.boxShadowVertical.vertical,
	);

export const useBoxShadowProps = (): ControlProps => {
	return {
		blur: useBoxShadowBlur(),
		color: useBoxShadowColor(),
		horizontal: useBoxShadowHorizontal(),
		opacity: useBoxShadowOpacity(),
		spread: useBoxShadowSpread(),
		vertical: useBoxShadowVertical(),
	};
};
