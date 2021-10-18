import React, { CSSProperties } from "react";
export const Example: React.FC<{
	style?: CSSProperties;
	children?: JSX.Element;
}> = (props) => {
	return (
		<div>
			<div style={props.style}>{props.children}</div>
		</div>
	);
};
