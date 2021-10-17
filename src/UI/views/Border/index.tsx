import { withControls } from "HOC";

import { BorderControls, BorderExample, BorderTitle } from "./BorderView";

export * from "./ModeControls";
export const Border = withControls(BorderTitle, BorderControls, BorderExample);
