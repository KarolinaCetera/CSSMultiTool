import { withControls } from "HOC";

import { TextShadowControls } from "./TextShadowControls";
import { TextShadowExample } from "./TextShadowExample";
import { TextShadowTitle } from "./TextShadowTitle";

export const TextShadow = withControls(
	TextShadowTitle,
	TextShadowControls,
	TextShadowExample,
);
