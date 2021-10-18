import { textShadowProps } from "const";
import { useTextShadowForms } from "hooks";
import { ReactElement } from "react";

export const placeTextShadowForms = (): Array<
	ReactElement<string, string> | null | undefined
> =>
	textShadowProps.map(
		({ id, modifyStyle }) =>
			useTextShadowForms({ id, modifyStyle }).find(
				(element) => element.id === id,
			)?.form,
	);
