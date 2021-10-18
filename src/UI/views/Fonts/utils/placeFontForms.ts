import { fontProps } from "const";
import { useFontForms } from "hooks";
import { ReactElement } from "react";

export const placeFontForms = (): Array<
	ReactElement<string, string> | null | undefined
> =>
	fontProps.map(
		({ id, modifyStyle }) =>
			useFontForms({ id, modifyStyle }).find((element) => element.id === id)
				?.form,
	);
