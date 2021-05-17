import { useSelector } from "react-redux";
import { BorderStyles } from "../../typings";

export const useBorderWidth = () =>
	useSelector((state: BorderStyles) => state.borderWidth.width);

export const useBorderColor = () =>
	useSelector((state: BorderStyles) => state.borderColor.color);

export const useBorderRadius = () =>
	useSelector((state: BorderStyles) => state.borderRadius.radius);

export const useBorderType = () =>
	useSelector((state: BorderStyles) => state.borderType.type);
