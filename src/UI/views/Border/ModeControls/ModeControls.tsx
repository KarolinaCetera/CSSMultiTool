import { radiusMode } from "const";
import React from "react";

import classes from "./ModeControls.module.scss";
import { ModeRadio } from "./ModeRadio";

export const ModeControls: React.FC = () => (
	<div className={classes.modeControls}>
		<p>Choose border-radius mode:</p>
		<div className={classes.radiusTypes}>
			{radiusMode.map(({ id, labelText }) => (
				<ModeRadio key={id} id={id} labelText={labelText} />
			))}
		</div>
	</div>
);
