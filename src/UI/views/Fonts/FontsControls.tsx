import React from "react";
import { Form } from "UI";

import { placeFontForms } from "./utils";

export const FontsControls: React.FC = () => <Form>{placeFontForms()}</Form>;
