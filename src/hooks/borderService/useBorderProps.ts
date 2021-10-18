import { DefaultRootState, useSelector } from "react-redux";
import { ControlProps, hooksReturnType } from "typings";

interface BorderStyles extends DefaultRootState {
	border: {
		borderWidth: { width: number };
		borderType: { type: string };
		borderColor: { color: string };
	};
}

const useBorderWidth = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderWidth.width);

const useBorderColor = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderColor.color);

const useBorderType = (): hooksReturnType =>
	useSelector((state: BorderStyles) => state.border.borderType.type);

export const useBorderProps = (): ControlProps => {
	return {
		width: useBorderWidth(),
		color: useBorderColor(),
		type: useBorderType(),
	};
};
