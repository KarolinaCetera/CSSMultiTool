import React, { CSSProperties } from "react";

import classes from "./StyleText.module.scss";

export const StyleText: React.FC<{ styleText: CSSProperties }> = ({
	styleText,
}) => {
	const style = {
		...styleText,
	};

	const styleString = Object.entries(style)
		.map(([key, value]) => {
			key = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
			return `${key}: ${value};`;
		})
		.join("\n");

	return (
		<div className={classes.styleText}>
			<div>
				<p>CSS Code:</p>
				<pre>{styleString}</pre>
			</div>
		</div>
	);
};
