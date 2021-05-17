import {
	Border,
	BoxShadow,
	ColorConverter,
	Fonts,
	Home,
	TextShadow,
	Transform,
	About,
} from "UI";

export const menuElements = [
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
