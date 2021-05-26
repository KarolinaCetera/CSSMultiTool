import { useSelector } from "react-redux";
import { BorderStyles } from "typings";

export const useBorderWidth = (): number =>
	useSelector((state: BorderStyles) => state.border.borderWidth.width);

export const useBorderColor = (): string =>
	useSelector((state: BorderStyles) => state.border.borderColor.color);

export const useBorderRadius = (): string =>
	useSelector((state: BorderStyles) => state.border.borderRadius.radius);

export const useBorderType = (): string =>
	useSelector((state: BorderStyles) => state.border.borderType.type);
