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

	const copyStyle = async () => {
		try {
			await navigator.clipboard.writeText(styleString);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<div className={classes.styleText}>
			<div>
				<div className={classes.styleTextHeader}>
					<p>CSS Code:</p>
					<button type="button" onClick={copyStyle}>
						Copy
					</button>
				</div>
				<pre className={classes.pre}>{styleString}</pre>
			</div>
		</div>
	);
};
