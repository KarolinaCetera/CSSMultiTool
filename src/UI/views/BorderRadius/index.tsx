import { BorderRadiusExample } from "./BorderRadiusExample";

export * from "./BorderRadiusControls";
import { withControls } from "HOC";

import { BorderRadiusControls } from "./BorderRadiusControls";
import { BorderRadiusTitle } from "./BorderRadiusTitle";

export const BorderRadius = withControls(
	BorderRadiusTitle,
	BorderRadiusControls,
	BorderRadiusExample,
);
