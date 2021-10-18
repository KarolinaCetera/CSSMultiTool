import React from "react";
import { ViewBox, ViewElement, ViewTitle } from "UI";

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
		<ViewElement>
			<ViewTitle>
				<TitleComponent />
			</ViewTitle>
			<ControlsComponent />
		</ViewElement>
		<ViewElement elementClass>
			<ExampleComponent />
		</ViewElement>
	</ViewBox>
);
