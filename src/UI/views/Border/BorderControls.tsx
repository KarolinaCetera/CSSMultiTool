import React from "react";
import classes from "./BorderControls.module.scss";
import { placeProperForm } from "./utils/placeProperForm";
import { Form } from "../../containers";
import RadiusControls from "./RadiusControls";

export const BorderControls: React.FC = () => {
	return (
		<div className={classes.borderControls}>
			<RadiusControls />
			<Form>{placeProperForm()}</Form>
		</div>
	);
};
