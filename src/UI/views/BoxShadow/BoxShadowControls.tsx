import React from "react";
import { useDispatch } from "react-redux";
import { placeProperForm } from "./utils/placeProperForm";

export const BoxShadowControls: React.FC = () => {
	const dispatch = useDispatch();

	return <div>{placeProperForm(dispatch)}</div>;
};
