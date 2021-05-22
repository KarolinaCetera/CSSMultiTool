import { withControls } from "HOC";
import { ColorConverterControls } from "./ColorConverterControls";
import { ColorConverterExample } from "./ColorConverterExample";

export const ColorConverter = withControls(
	ColorConverterControls,
	ColorConverterExample,
);
