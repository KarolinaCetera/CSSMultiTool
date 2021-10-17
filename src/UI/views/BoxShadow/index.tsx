import { withControls } from "HOC";

import { BoxShadowControls } from "./BoxShadowControls";
import { BoxShadowExample } from "./BoxShadowExample";
import { BoxShadowTitle } from "./BoxShadowTitle";

export const BoxShadow = withControls(
	BoxShadowTitle,
	BoxShadowControls,
	BoxShadowExample,
);
