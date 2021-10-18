import { borderRadiusProps } from "const";
import { useBorderRadiusForms } from "hooks";
import { ReactElement } from "react";

export const placeBorderRadiusForms = (): Array<
	ReactElement<string, string> | null | undefined
> =>
	borderRadiusProps.map(
		({ id, modifyStyle }) =>
			useBorderRadiusForms({ id, modifyStyle }).find(
				(element) => element.id === id,
			)?.form,
	);
