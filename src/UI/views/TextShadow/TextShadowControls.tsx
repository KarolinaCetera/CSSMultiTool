import React from "react";
import { Form } from "UI";

import { placeTextShadowForms } from "./utils";

export const TextShadowControls: React.FC = () => {
	return <Form>{placeTextShadowForms()}</Form>;
};
