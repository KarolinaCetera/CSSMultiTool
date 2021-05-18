import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { DefaultRootState } from "react-redux";

interface BorderProps {
	value: string;
	func: ActionCreatorWithPayload<string>;
}

interface BorderStyles extends DefaultRootState {
	borderWidth: { width: number };
	borderType: { type: string };
	borderColor: { color: string };
	borderRadius: { radius: string };
}
