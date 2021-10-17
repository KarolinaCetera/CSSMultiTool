import { borderProps } from "const";
import { useBorderForms } from "hooks";
import { HookReturn } from "typings";

export const placeBorderForms = (): Array<HookReturn> =>
	borderProps.map(
		({ id, modifyStyle }) =>
			useBorderForms({ id, modifyStyle }).find((element) => element.id === id)
				?.form,
	);
