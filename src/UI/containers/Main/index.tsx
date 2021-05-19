import React from "react";
import { Route, Switch } from "react-router-dom";

export const Main: (props: { menuElements: menuElement[] }) => JSX.Element = ({
	menuElements,
}) => {
	return (
		<main>
			<Switch>
				{menuElements.map(({ path, component }) => (
					<Route key={path} exact path={path} component={component} />
				))}
			</Switch>
		</main>
	);
};
