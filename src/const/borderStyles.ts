import { setWidth, setColor, setRadius, setType } from "../store";

import { BorderProps } from "../../typings/styleProperties";

export const borderTypeOptions: styleOption[] = [
	{ value: "", name: "Choose border type" },
	{ value: "solid", name: "Solid" },
	{ value: "dotted", name: "Dotted" },
	{ value: "dashed", name: "Dashed" },
	{ value: "none", name: "None" },
	{ value: "hidden", name: "Hidden" },
	{ value: "double", name: "Double" },
	{ value: "groove", name: "Groove" },
	{ value: "inset", name: "Inset" },
	{ value: "outset", name: "Outset" },
];

export const borderProps: BorderProps[] = [
	{ value: "width", func: setWidth },
	{ value: "type", func: setType },
	{ value: "color", func: setColor },
	{ value: "radius", func: setRadius },
];
