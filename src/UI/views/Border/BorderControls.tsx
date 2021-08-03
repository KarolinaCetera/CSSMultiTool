import React from "react";
import classes from "./BorderControls.module.scss";
import { useDispatch } from "react-redux";
import { placeProperForm } from "./utils/placeProperForm";
import { Form } from "../../containers";
import RadiusControls from "./RadiusControls";

export const BorderControls: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<div className={classes.borderControls}>
			<RadiusControls />
			<Form>{placeProperForm(dispatch)}</Form>
		</div>
	);
};
