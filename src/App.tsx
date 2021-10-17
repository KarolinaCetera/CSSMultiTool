import React from "react";
import { BrowserRouter } from "react-router-dom";

import classes from "./App.module.scss";
import { menuElements } from "./const";
import { Header, Main } from "./UI";

const AppLoading: React.FC = () => <div>Loading...</div>;

export const App: React.FC = () => {
	return (
		<React.Suspense fallback={<AppLoading />}>
			<BrowserRouter>
				<div className={classes.App}>
					<Header menuElements={menuElements} />
					<Main menuElements={menuElements} />
				</div>
			</BrowserRouter>
		</React.Suspense>
	);
};
