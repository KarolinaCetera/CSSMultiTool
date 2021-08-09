import { textShadowProps } from "const";
import { useTextShadowForms } from "hooks";

export const placeTextShadowForms = () =>
	textShadowProps.map(
		({ id, modifyStyle }) =>
			useTextShadowForms({ id, modifyStyle }).find(
				(element) => element.id === id,
			)?.form,
	);
