import React from "react";

import classes from "./StyleText.module.scss";

export const StyleText: React.FC<{ styleText: { [key: string]: string } }> = ({
	styleText,
}) => {
	const style = {
		...styleText,
	};

	const styleString = Object.entries(style)
		.map(([k, v]) => {
			k = k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
			return `${k}: ${v};`;
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
