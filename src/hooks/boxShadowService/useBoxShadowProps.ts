import { DefaultRootState, useSelector } from "react-redux";
import { ControlProps, hooksReturnType } from "typings";
import { hexToRgb } from "utils";

interface BoxShadowStyles extends DefaultRootState {
	boxShadow: {
		boxShadowBlur: {
			blur: number;
		};
		boxShadowColor: {
			shadowColor: string;
		};
		boxShadowHorizontal: { horizontal: number };
		boxShadowOpacity: { opacity: number };
		boxShadowSpread: { spread: number };
		boxShadowVertical: { vertical: number };
	};
}

const useBoxShadowBlur = (): hooksReturnType =>
	useSelector((state: BoxShadowStyles) => state.boxShadow.boxShadowBlur.blur);

const useBoxShadowColor = (): hooksReturnType =>
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
