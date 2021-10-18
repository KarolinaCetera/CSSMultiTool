import { DefaultRootState, useSelector } from "react-redux";

import { ControlProps, hooksReturnType } from "../../typings";

interface BorderRadiusStyles extends DefaultRootState {
	borderRadius: {
		borderRadiusTL: { radiusTL: number };
		borderRadiusTR: { radiusTR: number };
		borderRadiusBR: { radiusBR: number };
		borderRadiusBL: { radiusBL: number };
	};
}

const useBorderRadiusTL = (): hooksReturnType =>
	useSelector(
		(state: BorderRadiusStyles) => state.borderRadius.borderRadiusTL.radiusTL,
	);

const useBorderRadiusTR = (): hooksReturnType =>
	useSelector(
		(state: BorderRadiusStyles) => state.borderRadius.borderRadiusTR.radiusTR,
	);

const useBorderRadiusBR = (): hooksReturnType =>
	useSelector(
		(state: BorderRadiusStyles) => state.borderRadius.borderRadiusBR.radiusBR,
	);

const useBorderRadiusBL = (): hooksReturnType =>
	useSelector(
		(state: BorderRadiusStyles) => state.borderRadius.borderRadiusBL.radiusBL,
	);

export const useBorderRadius = (): ControlProps => {
	return {
		TL: useBorderRadiusTL(),
		TR: useBorderRadiusTR(),
		BR: useBorderRadiusBR(),
		BL: useBorderRadiusBL(),
	};
};
