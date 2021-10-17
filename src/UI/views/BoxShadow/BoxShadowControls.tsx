import React from "react";
import { Form } from "UI";

import { placeBoxShadowForms } from "./utils";

export const BoxShadowControls: React.FC = () => (
	<Form>{placeBoxShadowForms()}</Form>
);
