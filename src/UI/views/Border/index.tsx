import { withControls } from "HOC";

import { BorderControls } from "./BorderControls";
import { BorderExample } from "./BorderExample";
import { BorderTitle } from "./BorderTitle";

export const Border = withControls(BorderTitle, BorderControls, BorderExample);
