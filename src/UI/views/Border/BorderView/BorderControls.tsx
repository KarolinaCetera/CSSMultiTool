import React from "react";
import { Form, ModeControls } from "UI";

import { placeBorderForms } from "../utils";

export const BorderControls: React.FC = () => (
	<div style={{ width: "100%", height: "100%" }}>
		<ModeControls />
		<Form>{placeBorderForms()}</Form>
	</div>
);
