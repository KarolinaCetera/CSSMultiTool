import React from "react";
import { ViewElement, ViewBox } from "UI";

export const withControls: (
	ControlsComponent: React.FC,
	ExampleComponent: React.FC,
) => () => JSX.Element = (ControlsComponent, ExampleComponent) => () => (
	<ViewBox>
		<ViewElement>
			<ControlsComponent />
		</ViewElement>
		<ViewElement>
			<ExampleComponent />
		</ViewElement>
	</ViewBox>
);
