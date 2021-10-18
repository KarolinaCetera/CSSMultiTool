import React from "react";
import { Form } from "UI/index";

import { placeBorderForms } from "./utils";

export const BorderControls: React.FC = () => <Form>{placeBorderForms()}</Form>;
