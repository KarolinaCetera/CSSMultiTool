import { useSelector } from "react-redux";
import { BoxShadowStyles } from "../../typings/styleProperties";
import { hexToRgb } from "../utils";

export const useBoxShadowBlur = () =>
	useSelector((state: BoxShadowStyles) => state.boxShadowBlur.blur);

export const useBoxShadowColor = () =>
	useSelector((state: BoxShadowStyles) =>
		hexToRgb(state.boxShadowColor.shadowColor),
	);

export const useBoxShadowHorizontal = () =>
	useSelector((state: BoxShadowStyles) => state.boxShadowHorizontal.horizontal);

export const useBoxShadowOpacity = () =>
	useSelector((state: BoxShadowStyles) => state.boxShadowOpacity.opacity);

export const useBoxShadowSpread = () =>
	useSelector((state: BoxShadowStyles) => state.boxShadowSpread.spread);

export const useBoxShadowVertical = () =>
	useSelector((state: BoxShadowStyles) => state.boxShadowVertical.vertical);
