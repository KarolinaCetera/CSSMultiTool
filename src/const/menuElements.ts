import React from "react";
import { menuElement } from "typings";

const Home = React.lazy(() =>
	import("../UI/views/Home").then(({ Home }) => ({ default: Home })),
);
const Border = React.lazy(() =>
	import("../UI/views/Border").then(({ Border }) => ({ default: Border })),
);
const BoxShadow = React.lazy(() =>
	import("../UI/views/BoxShadow").then(({ BoxShadow }) => ({
		default: BoxShadow,
	})),
);
const TextShadow = React.lazy(() =>
	import("../UI/views/TextShadow").then(({ TextShadow }) => ({
		default: TextShadow,
	})),
);
const ColorConverter = React.lazy(() =>
	import("../UI/views/ColorConverter").then(({ ColorConverter }) => ({
		default: ColorConverter,
	})),
);
const Fonts = React.lazy(() =>
	import("../UI/views/Fonts").then(({ Fonts }) => ({ default: Fonts })),
);
const Transform = React.lazy(() =>
	import("../UI/views/Transform").then(({ Transform }) => ({
		default: Transform,
	})),
);
const About = React.lazy(() =>
	import("../UI/views/About").then(({ About }) => ({ default: About })),
);

export const menuElements: menuElement[] = [
	{ name: "Home", path: "/", component: Home },
	{ name: "Border", path: "/border", component: Border },
	{ name: "BoxShadow", path: "/boxShadow", component: BoxShadow },
	{ name: "Text-shadow", path: "/textShadow", component: TextShadow },
	{
		name: "Color Converter",
		path: "/colorConverter",
		component: ColorConverter,
	},
	{ name: "Fonts", path: "/fonts", component: Fonts },
	{ name: "Transform", path: "/transform", component: Transform },
	{ name: "About", path: "/about", component: About },
];
