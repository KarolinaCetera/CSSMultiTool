import { useRadiusMode } from "hooks";
import React, { ChangeEvent } from "react";
import { RadiusModeFeatures } from "typings";

export const ModeRadio: React.FC<RadiusModeFeatures> = ({ id, labelText }) => {
	const { mode, toggleMode } = useRadiusMode();
	const onChangeEvent = (e: ChangeEvent<HTMLInputElement>): void =>
		toggleMode(e.currentTarget.value);

	return (
		<>
			<input
				type="radio"
				id={id}
				value={id}
				name="radius"
				checked={mode === id}
				onChange={onChangeEvent}
			/>
			<label htmlFor={id}>{labelText}</label>
		</>
	);
};
