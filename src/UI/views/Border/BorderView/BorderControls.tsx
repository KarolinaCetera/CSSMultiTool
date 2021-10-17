import React from "react";
import classes from "./Border.module.scss";
import { Form } from "UI";
import { ModeControls } from "../ModeControls";
import { placeBorderForms } from "../utils";

export const BorderControls: React.FC = () => (
	<div className={classes.border}>
		<ModeControls />
		<Form>{placeBorderForms()}</Form>
	</div>
);
