import { useSelector } from "react-redux";
import { BorderStyles, hooksReturnType } from "typings";

export const useBorderWidth = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderWidth.width);

export const useBorderColor = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderColor.color);

export const useBorderRadius = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadius.radius);

export const useBorderRadiusTL = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadiusTL.radiusTL);

export const useBorderRadiusTR = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadiusTR.radiusTR);

export const useBorderRadiusBR = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadiusBR.radiusBR);

export const useBorderRadiusBL = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadiusBL.radiusBL);

export const useBorderType = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderType.type);
