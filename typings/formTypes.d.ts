import { ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";

interface InputProps {
	value: string;
	data: string;
	func: ActionCreatorWithPayload<string>;
	dispatch: Dispatch<any>;
}
