import { boxShadowProps } from "const";
import { useBoxShadowForms } from "hooks";

export const placeBoxShadowForms = () =>
	boxShadowProps.map(
		({ id, modifyStyle }) =>
			useBoxShadowForms({ id, modifyStyle }).find(
				(element) => element.id === id,
			)?.form,
	);
