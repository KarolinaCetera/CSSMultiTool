import { BorderControls } from "./BorderControls";
import { BorderExample } from "./BorderExample";
import { withControls } from "HOC";

export const Border = withControls(BorderControls, BorderExample);
