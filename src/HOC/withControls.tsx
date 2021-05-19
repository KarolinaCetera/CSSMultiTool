import React from "react";
import { ViewElement, ViewBox } from "UI";

export const withControls = (ControlsComponent, ExampleComponent) => {
	const HOC = () => {
		return (
			<ViewBox>
				<ViewElement>
					<ControlsComponent />
				</ViewElement>
				<ViewElement>
					<ExampleComponent />
				</ViewElement>
			</ViewBox>
		);
	};
	return HOC;
};
