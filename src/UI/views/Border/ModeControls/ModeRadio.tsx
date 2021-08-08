import React from "react";
import { useRadiusMode } from "hooks";

export const ModeRadio: React.FC<{ id: string; labelText: string }> = ({
	id,
	labelText,
}) => {
	const { mode, toggleMode } = useRadiusMode();

	return (
		<div>
			<label htmlFor={id}>{labelText}</label>
			<input
				type="radio"
				id={id}
				value={id}
				name="radius"
				checked={mode === id}
				onChange={(e) => toggleMode(e.currentTarget.value)}
			/>
		</div>
	);
};
