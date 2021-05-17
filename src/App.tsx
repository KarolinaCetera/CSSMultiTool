import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import { Header, Main } from "./UI/containers";
import { menuElements } from "./const";

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Header menuElements={menuElements} />
				<Main menuElements={menuElements} />
			</div>
		</BrowserRouter>
	);
};
