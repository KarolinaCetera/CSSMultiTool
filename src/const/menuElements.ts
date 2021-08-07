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

const Fonts = React.lazy(() =>
	import("../UI/views/Fonts").then(({ Fonts }) => ({ default: Fonts })),
);

const About = React.lazy(() =>
	import("../UI/views/About").then(({ About }) => ({ default: About })),
);

export const menuElements: menuElement[] = [
	{ name: "Home", path: "/", component: Home },
	{ name: "Border", path: "/border", component: Border },
	{ name: "BoxShadow", path: "/boxShadow", component: BoxShadow },
	{ name: "Fonts", path: "/fonts", component: Fonts },
	{ name: "Text-shadow", path: "/textShadow", component: TextShadow },
	{ name: "About", path: "/about", component: About },
];
