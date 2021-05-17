import { setWidth, setColor, setRadius, setType } from "../store";

export const options = [
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

export const borderProps = [
	{ value: "width", data: "number", func: setWidth },
	{ value: "type", data: "borderType", func: setType },
	{ value: "color", data: "string", func: setColor },
	{ value: "radius", data: "string", func: setRadius },
];
