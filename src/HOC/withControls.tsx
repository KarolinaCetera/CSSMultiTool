import React from "react";
import { ViewBox, ViewElement } from "UI";

export const withControls: (
	ViewTitle: React.FC,
	ControlsComponent: React.FC,
	ExampleComponent: React.FC,
) => () => JSX.Element = (
	TitleComponent,
	ControlsComponent,
	ExampleComponent,
) => (): JSX.Element => (
	<ViewBox>
		<ViewElement elementClass="controls">
			<TitleComponent />
			<ControlsComponent />
		</ViewElement>
		<ViewElement elementClass="sample">
			<ExampleComponent />
		</ViewElement>
	</ViewBox>
);
