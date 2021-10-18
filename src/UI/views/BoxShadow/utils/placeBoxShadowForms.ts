import { boxShadowProps } from "const";
import { useBoxShadowForms } from "hooks";
import { ReactElement } from "react";

export const placeBoxShadowForms = (): Array<
	ReactElement<string, string> | null | undefined
> =>
	boxShadowProps.map(
		({ id, modifyStyle }) =>
			useBoxShadowForms({ id, modifyStyle }).find(
				(element) => element.id === id,
			)?.form,
	);
