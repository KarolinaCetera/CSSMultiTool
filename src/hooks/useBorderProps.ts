import { useSelector } from "react-redux";
import { BorderStyles, hooksReturnType } from "typings";

export const useBorderWidth = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderWidth.width);

export const useBorderColor = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderColor.color);

export const useBorderRadius = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderRadius.radius);

export const useBorderType = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderType.type);
