import { withControls } from "HOC";

import { FontsControls } from "./FontsControls";
import { FontsExample } from "./FontsExample";
import { FontsTitle } from "./FontsTitle";

export const Fonts = withControls(FontsTitle, FontsControls, FontsExample);
