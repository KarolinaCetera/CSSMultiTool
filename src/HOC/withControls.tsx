import React from "react";
import { ViewElement, ViewBox } from "UI";
import StyleText from "../UI/components/StyleText";

export const withControls: (
	ControlsComponent: React.FC,
	ExampleComponent: React.FC,
) => () => JSX.Element = (ControlsComponent, ExampleComponent) => () => (
	<ViewBox>
		<ViewElement>
			<ControlsComponent />
		</ViewElement>
		<ViewElement elementClass={true}>
			<ExampleComponent />
			<StyleText />
		</ViewElement>
	</ViewBox>
);
