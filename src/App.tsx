import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import { Header, Main } from "UI";
import { menuElements } from "const";

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
