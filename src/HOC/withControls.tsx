import React from "react";
import { StyleText, ViewBox, ViewElement, ViewTitle } from "UI";

import classes from "./withControls.module.scss";

export const withControls: (
	ViewTitle: React.FC,
	ControlsComponent: React.FC,
	ExampleComponent: React.FC,
) => () => JSX.Element = (
	TitleComponent,
	ControlsComponent,
	ExampleComponent,
) => () => (
	<ViewBox>
		<ViewElement>
			<ViewTitle>
				<TitleComponent />
			</ViewTitle>
			<ControlsComponent />
		</ViewElement>
		<div className={classes.sample}>
			<div className={classes.example}>
				<ExampleComponent />
			</div>
			<div className={classes.styleText}>
				<StyleText />
			</div>
		</div>
	</ViewBox>
);
