import React, { CSSProperties } from "react";
import { Example, StyleText } from "UI";

export const ExampleComponent: React.FC<{
	style: CSSProperties;
	exampleChildren?: JSX.Element;
}> = (props) => {
	const example = props.children ? (
		<Example style={props.style}>{props.exampleChildren}</Example>
	) : (
		<Example style={props.style} />
	);

	return (
		<>
			{example}
			<StyleText styleText={props.style} />
		</>
	);
};
