import { useSelector } from "react-redux";
import { BorderStyles, ControlProps, hooksReturnType } from "typings";

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

export const userBorderRadiusCorner = (): ControlProps => {
	return {
		TL: useBorderRadiusTL(),
		TR: useBorderRadiusTR(),
		BR: useBorderRadiusBR(),
		BL: useBorderRadiusBL(),
	};
};
