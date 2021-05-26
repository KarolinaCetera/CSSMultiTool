import { withControls } from "HOC";
import { FilterControls } from "./FilterControls";
import { FilterExample } from "./FilterExample";

export const Filter = withControls(FilterControls, FilterExample);
