import React from "react";
import { Form } from "UI";

import { placeBorderRadiusForms } from "./utils";

export const BorderRadiusControls: React.FC = () => (
	<Form>{placeBorderRadiusForms()}</Form>
);
