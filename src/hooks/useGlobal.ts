import { useDispatch, useSelector } from "react-redux";
import { setRadiusMode } from "../store";
import { useCallback } from "react";
import { Global } from "../typings";

export const useRadiusMode = () => {
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
