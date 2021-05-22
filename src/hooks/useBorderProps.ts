import { useSelector } from "react-redux";
import { BorderStyles } from "typings";

export const useBorderWidth = (): number =>
	useSelector((state: BorderStyles) => state.borderWidth.width);

export const useBorderColor = (): string =>
	useSelector((state: BorderStyles) => state.borderColor.color);

export const useBorderRadius = (): string =>
	useSelector((state: BorderStyles) => state.borderRadius.radius);

export const useBorderType = (): string =>
	useSelector((state: BorderStyles) => state.borderType.type);
