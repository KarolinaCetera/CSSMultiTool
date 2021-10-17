import React from "react";

import classes from "./StyleText.module.scss";

export const StyleText: React.FC = () => {
	return (
		<div className={classes.text}>
			<p>CSS Code:</p>
			<pre></pre>
		</div>
	);
};
