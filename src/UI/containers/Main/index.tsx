import "./Main.module.scss";

import React from "react";
import { Route, Switch } from "react-router-dom";
import { MenuElements } from "typings";

export const Main: React.FC<MenuElements> = ({ menuElements }) => (
	<main>
		<Switch>
			{menuElements.map(({ path, component }) => (
				<Route key={path} exact path={path} component={component} />
			))}
		</Switch>
	</main>
);
