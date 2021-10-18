import React from "react";

export const StyleText: React.FC<{ styleText: { [key: string]: string } }> = ({
	styleText,
}) => {
	const style = {
		...styleText,
	};

	const styleString = Object.entries(style)
		.map(([k, v]) => {
			k = k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
			return `${k}: ${v}`;
		})
		.join(";\n");

	return (
		<div>
			<div style={{ overflow: "auto", height: "90%" }}>
				<p>CSS Code:</p>
				<pre>{styleString}</pre>
			</div>
		</div>
	);
};
