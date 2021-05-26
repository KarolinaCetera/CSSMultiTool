import { withControls } from "HOC";
import { FontsControls } from "./FontsControls";
import { FontsExample } from "./FontsExample";

export const Fonts = withControls(FontsControls, FontsExample);
