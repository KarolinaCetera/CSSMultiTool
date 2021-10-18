import { DefaultRootState, useSelector } from "react-redux";
import { ControlProps, hooksReturnType } from "typings";

interface BorderStyles extends DefaultRootState {
	border: {
		borderWidth: { width: number };
		borderType: { type: string };
		borderColor: { color: string };
		borderRadius: { radius: number };
		borderRadiusTL: { radiusTL: number };
		borderRadiusTR: { radiusTR: number };
		borderRadiusBR: { radiusBR: number };
		borderRadiusBL: { radiusBL: number };
	};
}

const useBorderWidth = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderWidth.width);

const useBorderColor = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderColor.color);

const useBorderRadius = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadius.radius);

const useBorderRadiusTL = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadiusTL.radiusTL);

const useBorderRadiusTR = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadiusTR.radiusTR);

const useBorderRadiusBR = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadiusBR.radiusBR);

const useBorderRadiusBL = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadiusBL.radiusBL);

const useBorderType = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderType.type);

export const useBorderPropsAll = (): ControlProps => {
	return {
		width: useBorderWidth(),
		color: useBorderColor(),
		radius: useBorderRadius(),
		type: useBorderType(),
	};
};

export const useBorderRadiusCorner = (): ControlProps => {
	return {
		TL: useBorderRadiusTL(),
		TR: useBorderRadiusTR(),
		BR: useBorderRadiusBR(),
		BL: useBorderRadiusBL(),
	};
};
