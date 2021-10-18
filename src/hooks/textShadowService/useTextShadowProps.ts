import { DefaultRootState, useSelector } from "react-redux";
import { ControlProps, hooksReturnType } from "typings";
import { hexToRgb } from "utils";

interface TextShadowStyles extends DefaultRootState {
	textShadow: {
		textShadowBlur: {
			blur: number;
		};
		textShadowColor: {
			textColor: string;
		};
		textShadowHorizontal: { textHorizontal: number };
		textShadowOpacity: { textOpacity: number };
		textShadowVertical: { textVertical: number };
	};
}

const useTextShadowBlur = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) => state.textShadow.textShadowBlur.blur,
	);

const useTextShadowColor = (): hooksReturnType =>
	useSelector((state: TextShadowStyles) =>
		hexToRgb(state.textShadow.textShadowColor.textColor),
	);

const useTextShadowHorizontal = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) =>
			state.textShadow.textShadowHorizontal.textHorizontal,
	);

const useTextShadowOpacity = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) => state.textShadow.textShadowOpacity.textOpacity,
	);

const useTextShadowVertical = (): hooksReturnType =>
	useSelector(
		(state: TextShadowStyles) =>
			state.textShadow.textShadowVertical.textVertical,
	);

export const useTextShadowProps = (): ControlProps => ({
	blur: useTextShadowBlur(),
	color: useTextShadowColor(),
	horizontal: useTextShadowHorizontal(),
	opacity: useTextShadowOpacity(),
	vertical: useTextShadowVertical(),
});
