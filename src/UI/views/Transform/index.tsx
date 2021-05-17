import { withControls } from "../../../HOC";
import { TransformControls } from "./TransformControls";
import { TransformExample } from "./TransformExample";

export const Transform = withControls(TransformControls, TransformExample);
