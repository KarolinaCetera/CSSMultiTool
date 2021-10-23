import React from "react";

import classes from "./About.module.scss";

export const About: React.FC = () => {
	return (
		<div className={classes.about}>
			<h2>About me</h2>
			<p>Hi! My name is Karolina and I am frontend developer.</p>
			<p>
				In 2020 I have started my journey in web development. Since that day I
				keep falling in love with every line of the code I have written. Feel
				free to check my
				<span>
					<a
						href="https://github.com/KarolinaCetera"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						GitHub Repository{" "}
					</a>
				</span>
				and find out what the effects of this feeling are.
			</p>
		</div>
	);
};
