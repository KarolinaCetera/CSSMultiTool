import { borderProps } from "const";
import { useBorderForms } from "hooks";
import { ReactElement } from "react";

export const placeBorderForms = (): Array<
	ReactElement<string, string> | null | undefined
> =>
	borderProps.map(
		({ id, modifyStyle }) =>
			useBorderForms({ id, modifyStyle }).find((element) => element.id === id)
				?.form,
	);
