import { useSelector } from "react-redux";
import { hexToRgb } from "utils";
import { TextShadowStyles } from "../../typings/styleProperties";

export const useTextShadowBlur = () =>
	useSelector((state: TextShadowStyles) => state.textShadowBlur.blur);

export const useTextShadowColor = () =>
	useSelector((state: TextShadowStyles) =>
		hexToRgb(state.textShadowColor.textColor),
	);

export const useTextShadowHorizontal = () =>
	useSelector(
		(state: TextShadowStyles) => state.textShadowHorizontal.textHorizontal,
	);

export const useTextShadowOpacity = () =>
	useSelector((state: TextShadowStyles) => state.textShadowOpacity.textOpacity);

export const useTextShadowVertical = () =>
	useSelector(
		(state: TextShadowStyles) => state.textShadowVertical.textVertical,
	);
