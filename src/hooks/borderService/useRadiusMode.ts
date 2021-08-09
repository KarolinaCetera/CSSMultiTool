import { useDispatch, useSelector } from "react-redux";
import { setRadiusMode } from "../../store";
import { useCallback } from "react";
import { Global } from "../../typings";

interface RadiusMode {
	mode: string;
	toggleMode: (value: string) => void;
}

export const useRadiusMode = (): RadiusMode => {
	const dispatch = useDispatch();

	const { mode } = useSelector((state: Global) => state.global.radiusMode);

	const toggleMode = useCallback(
		(value) => {
			dispatch(setRadiusMode(value));
		},
		[dispatch],
	);

	return { mode, toggleMode };
};
