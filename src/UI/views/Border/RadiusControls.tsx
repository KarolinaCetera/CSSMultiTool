import React from "react";
import classes from "./BorderControls.module.scss";
import { useRadiusMode } from "hooks";

const RadiusControls: React.FC = () => {
	const { mode, toggleMode } = useRadiusMode();

	return (
		<div className={classes.mode}>
			<p>Choose border-radius mode:</p>
			<div className={classes.radiusTypes}>
				<div>
					<label htmlFor="all">All corners</label>
					<input
						type="radio"
						id="all"
						value="all"
						name="radius"
						checked={mode === "all"}
						onChange={(e) => toggleMode(e.currentTarget.value)}
					/>
				</div>
				<div>
					<label htmlFor="separate">Separate corners</label>
					<input
						type="radio"
						id="separate"
						value="separate"
						name="radius"
						checked={mode === "separate"}
						onChange={(e) => toggleMode(e.currentTarget.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default RadiusControls;
